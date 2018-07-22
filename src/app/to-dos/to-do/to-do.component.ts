import { Component, OnInit } from '@angular/core';

import{ToDoService} from '../Shared/to-do.service'
import{ToastrService} from 'ngx-toastr'
import { NgForm } from '../../../../node_modules/@angular/forms';
import{AngularFireAuth} from 'angularfire2/auth'

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor(private toDoService:ToDoService, private toastr:ToastrService, private authf : AngularFireAuth) { 
    /* this.authf.authState.subscribe(user =>{
      if(user){
        console.log('This user Id in the todo Page: ', user.uid)
      }
      else{
        console.log('No User found!')
      }
    }) */
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
