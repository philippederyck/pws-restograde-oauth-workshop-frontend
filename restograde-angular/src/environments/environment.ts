// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

<<<<<<< HEAD
  endpoints: {
    api: "http://localhost:8080/v1/"
  },
  oauth: {
    provider: "pws-demo.eu.auth0.com",
    client_id: "Bh91lG2QLb1jxEPs7N57ElVuHixJGaCc",
    scope: "openid profile email reviews.read reviews.write",
    audience: "https://localhost:8080" //TODO REPLACE WITH REAL VALUE
    // audience: "https://api.oauth-workshop.restograde.com"
=======
  endpoints: { //TODO CHANGE
    api: "http://localhost:8080/v0/",
    images: "http://localhost:8080/",
>>>>>>> master
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
