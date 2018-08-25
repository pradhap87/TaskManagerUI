import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes, Router, convertToParamMap, ParamMap, Params, ActivatedRoute } from '@angular/router';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { UpdateTaskComponent } from './update-task.component';
import { SharedService } from '../shared.service';
import { ReplaySubject } from 'rxjs';
import { ActivatedRouteStub } from '../activated-route-stub';

describe('UpdateTaskComponent', () => {
  let component: UpdateTaskComponent;
  let fixture: ComponentFixture<UpdateTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTaskComponent ],
        imports: [FormsModule, RouterModule, HttpModule, RouterTestingModule]     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});