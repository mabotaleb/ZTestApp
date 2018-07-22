import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Router } from '../../node_modules/@angular/router';
import { AngularFireDatabase } from '../../node_modules/angularfire2/database';

import { User } from './user'
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import { VariableAst } from '../../node_modules/@angular/compiler';

@Injectable({
  providedIn: 'root'
})

 export class AuthService {

  user: Observable<firebase.User>;
  database;
  
  constructor(private angularFireAuth: AngularFireAuth,private router:Router,private angularFireDatabase: AngularFireDatabase) {
    this.user = angularFireAuth.authState;
    this.database=this.angularFireDatabase.database;

    /*  this.angularFireAuth.authState
        .switchMap(auth => {
          if (auth) {
            /// signed in
            return this.database.object('users/' + auth.uid)
          } else {
            /// not signed in
            return Observable.of(null)
          }
        })
        .subscribe(user => {
          this.user.(user);
        }) */
  }

  Signup(email: string, password: string) {
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        localStorage.setItem("UserID", firebase.auth().currentUser.uid);
        this.database.ref('users/'+firebase.auth().currentUser.uid).set({email:email,password:password}).then(value=>{
          console.log('Adding In Database Success!', value);
        this.router.navigate(['home']);
        console.log('Navigation Success!', value);
        })
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }

  Login(email: string, password: string) {
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        localStorage.setItem("UserID", value.user.uid);
        console.log('Logged In!' + value.user.uid);
        this.sendToken(email);
        this.router.navigate(["home"]);
      })
      .catch(err => {
        console.log('Something went wrong while trying to login:',err.message);
      });
  }

  
  GoogleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.angularFireAuth.auth.signInWithPopup(provider)
      .then(credential =>  {
          this.updateUser(credential.user)
      })
  }

  Logout() {
    localStorage.removeItem("LoggedInUser");
    this.angularFireAuth
    .auth
    .signOut().then(res=>{
      localStorage.removeItem("UserID");
      this.router.navigate(["login"]);
    })
  }

  private updateUser(authData) {
    const userData = new User(authData)
    const ref = this.database.object('users/' + authData.uid)
    ref.take(1)
       .subscribe(user => {
        if (!user.role) {
          ref.update(userData)
        }
    })
  }

  //El 7agat El Gdeda
  
  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }

  getToken() {
    console.log('Inside Get Token: ',localStorage.getItem("LoggedInUser"));
    return localStorage.getItem("LoggedInUser")
  }

  isLoggednIn() {
    return this.getToken() !== null;
  }
  GetUserID()
  {
    return localStorage.getItem("UserID");
  }
}

/* AuthService.userID='aho'; */