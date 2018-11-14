import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks = [];
  item = "";
  isAdmin = true;
  profile: number =2;
  constructor() { }

  ngOnInit() {
  }

  add():void {
    this.tasks.push(this.item);
  }
}
