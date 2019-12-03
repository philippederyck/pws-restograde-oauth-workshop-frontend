import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restograde-login-form',
  templateUrl: './restograde-login-form.component.html',
  styleUrls: ['./restograde-login-form.component.scss']
})
export class RestogradeLoginFormComponent implements OnInit {

  error: string = "";
  model = {
    email: "demo@restograde.com",
    pass: "123456"
  };

  constructor(private authService : AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model.email, this.model.pass)
      .subscribe(
        data => { 
          console.log("Authentication succcessful");
          this.error = "";
          this.router.navigate(["/home"]);
        },
        error => {
          console.log("Authentication failed");
          if(error.status == 401) {
            this.error = "Invalid username or password"
          }
          else {
            this.error = "Uknown authentication error (status: " + error.status + ")";
          }
        }
      );
  }

}
