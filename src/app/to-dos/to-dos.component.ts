import { Component, OnInit } from '@angular/core';

import{ToDoService} from './Shared/to-do.service'
@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css'],
  providers :[ToDoService]
})
export class ToDosComponent implements OnInit {

  constructor(private toDoService:ToDoService) { }

  ngOnInit() {
  }

}
