import { TestBed, inject } from '@angular/core/testing';
import { SharedService } from './shared.service';
import { AppModule } from './app.module';
import { HttpModule, Http, XHRBackend, Response, ResponseOptions, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs';

let testService: SharedService;
let mockBackend: MockBackend;

describe('Task Manager - Shared Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedService, MockBackend, BaseRequestOptions, {
        provide: Http,
        useFactory: (backend: MockBackend, options: BaseRequestOptions) => new Http(backend, options),
        deps: [MockBackend, BaseRequestOptions]
      }],
      imports: [HttpModule]
    });
  });
  it('should be created', inject([SharedService], (service: SharedService) => {
    expect(service).toBeTruthy();
  }));

  it('getTask_ByID should return JSON value', inject([SharedService], (taskService) => {
     taskService.GetTask_ByID(8).subscribe(result => expect(result[0].Task_ID).toEqual(8));
  }));

  it('Retrieves all the tasks', inject([SharedService], (taskService) => {
    taskService.Get_Tasks().subscribe(result => expect(result.length).toBeGreaterThan(0));

  }));
  

  });  
