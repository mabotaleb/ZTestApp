import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  email: string;
  password: string;

  constructor(public authService: AuthService) {}

  ngOnInit() {
  }

  Signup() {
    this.authService.Signup(this.email, this.password);
    this.email = this.password = '';
  }

  Logout() {
    this.authService.Logout();
  }
}
