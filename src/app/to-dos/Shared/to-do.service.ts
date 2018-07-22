import { Injectable } from '@angular/core';

import {ToDo} from "./to-do.model";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  toDoList:AngularFireList<any>;
  selectedToDo:ToDo= new ToDo();
  
  constructor(private firebase: AngularFireDatabase) { }

  GetData()
  {
    this.toDoList=this.firebase.list('todos/');
    console.log(this.toDoList);
    return this.toDoList;
  }

  InsertToDo(toDo:ToDo)
  {
    this.toDoList.push({
        title: toDo.title, description: toDo.description, state: toDo.state
    });
  }

  UpdateToDo(toDo:ToDo)
  {
    this.toDoList.update(toDo.$key,
      {
        title: toDo.title, description: toDo.description, state: toDo.state
    });
  }

  DeleteToDo($key:string)
  {
    this.toDoList.remove($key);
  }

  ToggleToDoState(toDo:ToDo) //try to do it using key only
  {
    this.toDoList.update(toDo.$key,
      {
        title: toDo.title, description: toDo.description, state: !toDo.state
    });
    //ref.update()
  }
}

