import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /* template: `
  <h1>Angular Router</h1>
  <nav>
    <a routerLink="/register" routerLinkActive="active">Register</a><br/>
    <a routerLink="/login" routerLinkActive="active">Login</a>
  </nav>
  <router-outlet></router-outlet>
` */
})
export class AppComponent {
  title = 'app';
}