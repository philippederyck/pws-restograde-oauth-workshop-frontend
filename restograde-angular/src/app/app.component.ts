import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private route: ActivatedRoute, private authService: AuthenticationService) {}

  ngOnInit() {}

}


