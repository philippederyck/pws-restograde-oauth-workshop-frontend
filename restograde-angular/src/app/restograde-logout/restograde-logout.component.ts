import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restograde-logout',
  templateUrl: './restograde-logout.component.html',
  styleUrls: ['./restograde-logout.component.scss']
})
export class RestogradeLogoutComponent implements OnInit {

  error: string = "";

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authService.logout();
    console.log("Logged out, navigating to home");
    this.router.navigate(["/home"]);
  }
}
