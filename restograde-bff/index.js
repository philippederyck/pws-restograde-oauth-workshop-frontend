const express = require('express');
const axios = require('axios');
const session = require('express-session')
const { auth } = require('express-openid-connect');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

// Configuration
const provider = "https://pws-demo.eu.auth0.com"; // Replace with your provider
const clientID = "IiGu3LKq1Rn6r6m2nHGsapowU6t3b5fU"; // Replace with your client ID
const clientSecret = "B59ELieuYcuDDaI6M1BPPLsZaFO8NOQ_YiiYrwM9wTWlAI3zSpjbFwFIW2KG9Ad8"; // Replace with your client secret

const audience = "https://api.oauth-workshop.restograde.com";
const bff = 'http://localhost:3000';
const api = `${audience}/v1`; 
const frontend = 'http://localhost:4200';

// Setup JSON Bodies
app.use(bodyParser.json());

// Setup cookie-based sessions with the frontend
app.use(session({
    secret: 'SomeSuperSecretGoesHere',
    resave: false,
    saveUninitialized: true
}));

// Setup Oauth 2.0 and OIDC with Auth0 (https://github.com/auth0/express-openid-connect/blob/master/EXAMPLES.md)
app.use(express.urlencoded({ extended: false }));
app.use(auth({
    required: false, // We do not want redirects on API calls
    issuerBaseURL: provider,
    baseURL: bff,
    clientID: clientID,
    clientSecret: clientSecret,
    authorizationParams: {
        response_type: 'code id_token',
        response_mode: 'form_post',
        audience: audience,
        scope: 'openid profile email reviews.read reviews.write offline_access'
    }
}));


// Setup CORS
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
  }));

/*
 * Define the OIDC endpoints and the session check endpoint
 */

 // Initialize login and logout flows
app.get('/oidc/login', (req, res) => res.openid.login({ returnTo: frontend }));
app.get('/oidc/logout', (req, res) => res.openid.logout({ idpLogout: true, returnTo: frontend }));

// Allow the frontend to verify if a session exists
app.get('/oidc/verifyLogin', async (req, res) => {
    try {
        if(req.openid && req.openid.user) {
            res.send({
                status: 'authenticated',
                username: req.openid.user.nickname
            })
        }
        else {
            res.send({
                status: 'unauthenticated'
            })
        }
    }
    catch(error) {
        console.log("Request failed: " + error);
        res.status(500).send("Unexpected error during login verification");
    }
});

/*
 * Define the BFF API endpoints
 */
app.get('/bff/restaurants', async (req, res) => {
    await simpleGet(req, res, `${api}/restaurants`);
});

app.get('/bff/reviews/:id', async (req, res) => {
    await simpleGet(req, res, `${api}/reviews/${req.params.id}`);
});

app.get('/bff/reviews', async (req, res) => {
    let restaurantId = req.query.restaurant;
    if(restaurantId != null) {
        await simpleGet(req, res, `${api}/reviews?restaurant=${restaurantId}`);
    }
    else {
        await simpleGet(req, res, `${api}/reviews`);
    }
});

app.post('/bff/reviews', async (req, res) => {
    try {
        let config = await getBasicRequestConfig(req);
        console.log(`POST ${api}/reviews`);
        const response = await axios.post(`${api}/reviews`, req.body, config);
        transferResponse(response, res);
    }
    catch(error) {
        console.log("Request failed: " + error);
        transferResponse(error.response, res);
    }
});

app.patch('/bff/reviews/:id', async (req, res) => {
    try {
        let config = await getBasicRequestConfig(req);
        console.log(`PATCH ${api}/reviews/${req.params.id}`);
        const response = await axios.patch(`${api}/reviews/${req.params.id}`, req.body, config);
        transferResponse(response, res);
    }
    catch(error) {
        console.log("Request failed: " + error);
        transferResponse(error.response, res);
    }
});

/*
 * Helper functions
 */
async function simpleGet(req, res, url) {
    try {
        let config = await getBasicRequestConfig(req);
        console.log(`GET ${url}`);
        const response = await axios.get(url, config);
        transferResponse(response, res);
    }
    catch(error) {
        console.log("Request failed: " + error);
        transferResponse(error.response, res);
    }
}

async function getBasicRequestConfig(req) {
    let config = {};
    if(req.openid) {
        let tokenSet = req.openid.tokens;

        // console.log(tokenSet);

        if (tokenSet && tokenSet.expired() && tokenSet.refresh_token) {
            console.log("Token expired, trying to use refresh token ...");
            try {
                tokenSet = await req.openid.client.refresh(tokenSet);
            } catch(err) {
                console.error(`Failed to use refresh token: ${err}`);
            }
        
            tokenSet.refresh_token = req.openid.tokens.refresh_token;
            req.openid.tokens = tokenSet;
        }

        if(tokenSet && !tokenSet.expired()) {
            config.headers = {
                'Authorization': `Bearer ${tokenSet.access_token}`
            }
        }
        else {
            if(tokenSet) {
                console.log("Tokens are expired, so we cannot add a token to the API call ...");
            }
            else {
                console.log("No tokens available, so we cannot add a token to the API call ...");
            }
        }
    }
    return config;
}

function transferResponse(received, sending) {
    sending.status(received.status).send(received.data);
}

app.listen(port, () => console.log(`BFF API listening on port ${port}!`))