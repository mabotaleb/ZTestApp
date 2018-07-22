import { Component, OnInit } from '@angular/core';

import {ToDo} from '../Shared/to-do.model'
import{ToDoService} from '../Shared/to-do.service'
import{ToastrService} from 'ngx-toastr'
import { element } from '../../../../node_modules/protractor';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  toDoList:ToDo[];

  constructor(private toDoService:ToDoService,private toastr:ToastrService) { }

  ngOnInit() {
    let misFormattedData=this.toDoService.GetData();
    misFormattedData.snapshotChanges().subscribe(item=>{
      this.toDoList=[];
      item.forEach(element =>{
        let payLoad=element.payload.toJSON();
        payLoad["$key"]=element.key;
        this.toDoList.push(payLoad as ToDo);
      });
    });
  }

  OnEdit(todo:ToDo)
  {
    this.toDoService.selectedToDo=Object.assign({},todo);
  }

  OnDelete(toDoKey:string)
  {
    if(confirm('Are You Sure You Want To Delete This Task?')==true)
    {
    this.toDoService.DeleteToDo(toDoKey);
    this.toastr.warning("Deleted Successfully","ToDo Register");
    }
  }
}
