import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  email: string;
  password: string;

  constructor(public authService: AuthService,private router:Router) {}

  ngOnInit() {
  }

  Login() {
    const authstate = this.authService.Login(this.email, this.password);
    this.email = this.password = '';    
    this.authService.sendToken(this.email)
    //console.log(this.authService.user.)

    this.router.navigate(["home"]);
    //this.Logout();
  }

  Logout() {
    this.authService.Logout();
    console.log("Logged Out ☺");
    
  }
}
