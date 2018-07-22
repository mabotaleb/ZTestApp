import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '../../node_modules/angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersList:AngularFireList<any>;
  
  constructor(private firebase: AngularFireDatabase) { }

  GetData()
  {
    this.usersList=this.firebase.list('users');
    return this.usersList;
  }
}
