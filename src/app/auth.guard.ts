import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { auth } from '../../node_modules/firebase';
import { AuthService } from './auth.service';
import { AngularFireDatabase } from '../../node_modules/angularfire2/database';
import { FirebaseAuth } from '../../node_modules/@firebase/auth-types/';
import { AngularFireAuth } from '../../node_modules/angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,
    private myRoute: Router,
    private firebase:AngularFireDatabase,
  private angularFireAuth:AngularFireAuth){

  }
  canActivate(

    next: ActivatedRouteSnapshot,

    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.auth.isLoggednIn()){
      console.log("Inside Auth Guard, User is Logged In");
      this.auth.user;
      return true;

    }else{

      this.myRoute.navigate(["login"]);
      console.log("Inside Auth Guard, User isn't Logged In");

      return false;

    }

  }

  public IsAdmin()
  {
    if(this.auth.isLoggednIn())
    {
      console.log('Debug Users List',this.firebase.list('users/'+this.auth.userId));
      console.log('Debug User ID',this.auth.userId);
      
      return true;
    }
    else
      return false;
  }

}
