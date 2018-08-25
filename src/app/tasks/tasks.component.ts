import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [SharedService]
})
export class TasksComponent implements OnInit {
  title: string;
  parentTask: string = '';
  taskName: string = '';
  priorityFrom: number = null;
  priorityTo: number = null;
  startDate: string;
  endDate: string;
  jsonData: JSON;
  errorMsg: boolean;
  Data: string;
  constructor(private _service: SharedService) {
    this._service.Get_Tasks().subscribe(p => this.jsonData = p);
  }
  ngOnInit() {
    this.title = 'Tasks';
  }
  GetTask() {
    if (this.taskName != null && this.priorityTo != null && this.priorityFrom != null) {
      this.errorMsg = null;
      this._service.FilterTask(this.taskName, this.parentTask, this.priorityFrom, this.priorityTo, this.startDate, this.endDate)
        .subscribe(p => this.jsonData = p);
    }
    else {
      this.errorMsg = true;
    }
  }
}