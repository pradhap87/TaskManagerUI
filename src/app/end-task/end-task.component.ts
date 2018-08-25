import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-end-task',
  templateUrl: './end-task.component.html',
  styleUrls: ['./end-task.component.css']
})
export class EndTaskComponent implements OnInit {

   title: string = 'End Task';
  taskId: number;
  jsonData: JSON;
  responseData :boolean;
  constructor(private _service: SharedService, private route: ActivatedRoute) {
    route.queryParams.subscribe(data => this.taskId = data['TaskId']);
    this._service.GetTask_ByID(this.taskId).subscribe(p => this.jsonData = p);            
  }
DeleteTask(jsonData)
{  
  this._service.Update_Task(jsonData)
     .subscribe(p=>this.responseData=p);       
}
  ngOnInit() {

  }
}