import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { SharedService } from './shared.service';
import { DeleteComponent } from './delete/delete.component';
import { EndTaskComponent } from './end-task/end-task.component';
import { appRoutes } from '../app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TasksComponent,
    TaskComponent,    
    UpdateTaskComponent,
    DeleteComponent,
    EndTaskComponent
  ],
  imports: [
    FormsModule, RouterModule.forRoot(appRoutes), BrowserModule, ReactiveFormsModule, HttpModule, HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule { }