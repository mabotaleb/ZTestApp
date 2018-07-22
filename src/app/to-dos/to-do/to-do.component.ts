import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

import{ToDoService} from '../Shared/to-do.service'
import{ToastrService} from 'ngx-toastr'
import {AngularFireAuth} from 'angularfire2/auth';
 

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  uid;

  constructor(private toDoService:ToDoService, private toastr:ToastrService,private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if(user) {
        this.uid = user.uid;
        console.log('UserId In The todo Page: ',this.uid)
      } else {
        // Empty the value when user signs out
        this.uid = null;
        console.log('No UserId',this.uid)
      }
    });
   }

  ngOnInit() {
    this.ResetForm();
  }

  OnSubmit(toDoForm:NgForm)
  {
    console.log('OnSubmit Have Been Called');
    if(toDoForm.value.$key==null)
    this.toDoService.InsertToDo(toDoForm.value);
    else
    this.toDoService.UpdateToDo(toDoForm.value);
    this.ResetForm(toDoForm);
    this.toastr.success('Submitted Successfully','ToDo Register');
  }

  ResetForm(toDoForm?:NgForm)
  {
    if(toDoForm!=null)
      toDoForm.reset();
    this.toDoService.selectedToDo={
      $key:null,
      title:'',
      description:'',
      state:false
    }
  }

  ToggleToDoState(toDoForm:NgForm)
  {
    this.toDoService.ToggleToDoState(toDoForm.value);
  }
}
