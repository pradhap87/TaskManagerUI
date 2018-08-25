import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EndTaskComponent } from './end-task.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('EndTaskComponent', () => {
  let component: EndTaskComponent;
  let fixture: ComponentFixture<EndTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EndTaskComponent],
      imports: [FormsModule, RouterModule, HttpModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
