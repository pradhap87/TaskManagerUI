import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})


export class UpdateTaskComponent implements OnInit {
  title: string = 'Update Task';
  taskId: number;
  jsonData: JSON;
  responseData :boolean;
  constructor(private _service: SharedService, private route: ActivatedRoute) {
    route.queryParams.subscribe(data => this.taskId = data['TaskId']);
    this._service.GetTask_ByID(this.taskId).subscribe(p => this.jsonData = p);            
  }
  
UpdateTask(jsonData)
{   
  this._service.Update_Task(jsonData)
     .subscribe(p=>this.responseData=p);       
}
  ngOnInit() {

  }
}