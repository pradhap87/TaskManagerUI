import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { map } from "rxjs/operators";
import { Headers, RequestOptions, RequestMethod } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  TaskManagerBaseUrl: string = 'http://localhost/TaskManager.WebAPI/api/TaskManager';
  parentTask: string;
  taskName: string;
  priorityFrom: number;
  priorityTo: number;
  startDate: string;
  endDate: string;
  taskDescription: string;
  taskPriority: string;
  taskParent: string;
  taskStartDate: string;
  taskEndDate: string;
  taskId: number;
  jsonData: JSON;
  constructor(private _http: Http) { }
  Get_Tasks(): Observable<JSON> {
    return this._http.get(this.TaskManagerBaseUrl + "/GetTasks")
      .pipe(map((data: Response) => <JSON>data.json()));
  }
  GetTask_ByID(taskId): Observable<JSON> {
    return this._http.get(this.TaskManagerBaseUrl + "/GetTaskById/" + taskId)
      .pipe(map((data: Response) => <JSON>data.json()));
  }
  FilterTask(taskName, parentTask, priorityFrom, priorityTo, startDate, endDate): Observable<JSON> {
    return this._http.get(this.TaskManagerBaseUrl + "/GetTaskbyFilter?task=" + taskName + "&parentTask=" + parentTask + "&priorityFrom=" + priorityFrom + "&priorityTo=" + priorityTo + "&startDate=" + startDate + "&endDate=" + endDate)
      .pipe(map((data: Response) => <JSON>data.json()));
  }
  Add_Task(taskDescription, taskPriority, taskParent, taskStartDate, taskEndDate): Observable<boolean> {
    return this._http.get(this.TaskManagerBaseUrl + "/AddTask?task=" + taskDescription + "&parentTask=" + taskParent + "&priority=" + taskPriority + "&startDate=" + taskStartDate + "&endDate=" + taskEndDate)
      .pipe(map((data: Response) => <boolean>data.ok));
  }

  Update_Task(jsonData): Observable<boolean> {
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this._http.post(this.TaskManagerBaseUrl + "/UpdateTask", JSON.stringify(jsonData), requestOptions)
      .pipe(map((data: Response) => <boolean>data.ok));
  }

  Delete_Task(jsonData): Observable<boolean> {    
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this._http.post(this.TaskManagerBaseUrl + "/DeleteTask", JSON.stringify(jsonData), requestOptions)
      .pipe(map((data: Response) => <boolean>data.ok));
  }
}