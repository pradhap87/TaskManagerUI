import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']   
})
export class DeleteComponent implements OnInit {
  title: string = 'Delete Task';
  taskId: number;  
  jsonData: JSON; 
  responseData :boolean;
  constructor(private _service: SharedService, private route: ActivatedRoute) {
    route.queryParams.subscribe(data => this.taskId = data['TaskId']);
    this._service.GetTask_ByID(this.taskId).subscribe(p => this.jsonData = p);            
  }
DeleteTask(jsonData)
{  
  this._service.Delete_Task(jsonData)
     .subscribe(p=>this.responseData=p);       
}
  ngOnInit() {

  }
}