import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { auth } from '../../node_modules/firebase';
import { AuthService } from './auth.service';
import { AngularFireDatabase } from '../../node_modules/angularfire2/database';
import { FirebaseAuth } from '../../node_modules/@firebase/auth-types/';
import { AngularFireAuth } from '../../node_modules/angularfire2/auth';
import { userInfo } from 'os';
import {AngularFireList} from "angularfire2/database";
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
    private myRoute: Router,
    private firebase:AngularFireDatabase,
  private angularFireAuth:AngularFireAuth,){

  }
  canActivate(

    next: ActivatedRouteSnapshot,

    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.authService.isLoggednIn()){
      console.log("Inside Auth Guard, User is Logged In");
      this.authService.user;
      return true;

    }else{

      this.myRoute.navigate(["login"]);
      console.log("Inside Auth Guard, User isn't Logged In");

      return false;

    }

  }

   public async IsAdmin()
  {
    /* let promise = new Promise((resolve,reject)=>{
      setTimeout(()=> resolve("done!"),5000)
    });
    let result = await promise; */

    /* let value:boolean =false; */
       const ayvalue= await this.angularFireAuth.authState.subscribe(user=>{

        if(user)
        {
          let userData;
         this.firebase.database.ref('users/'+user.uid).on('value',function(snapshot){
          userData=snapshot.val();
             
          console.log('User role',userData['role'])
            if(userData['role']=='admin')
             return true
            
          })
               
      }
        else
        {
        console.log("No User Was Found!");
      }
      }); 

     console.log("Hello World",ayvalue )
  }
 /*  public GetRole(): Promise<string>
  {
     
    return Promise;
  } */
}
