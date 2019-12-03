import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-restograde-home',
  templateUrl: './restograde-home.component.html',
  styleUrls: ['./restograde-home.component.scss']
})
export class RestogradeHomeComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

}
