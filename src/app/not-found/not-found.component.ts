import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  template: '<h2>Page not found</h2>'
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
