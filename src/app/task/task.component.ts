import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  title: string = 'Add Task';
  taskDescription: string;
  taskPriority: string;
  taskParent: string;
  taskStartDate: string;
  taskEndDate: string;
  responseData: boolean;

  constructor(private _service: SharedService) { }

  AddTask() {
    this._service.Add_Task(this.taskDescription, this.taskPriority, this.taskParent, this.taskStartDate, this.taskEndDate)
      .subscribe(p => this.responseData = p);
  }
  reset() {
    this.taskDescription = null; this.taskPriority = null; this.taskParent = null; this.taskStartDate = null; this.taskEndDate = null;
  }
  ngOnInit() {
  }

}
