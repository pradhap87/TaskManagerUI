import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { DeleteComponent } from './delete/delete.component';
import { EndTaskComponent } from './end-task/end-task.component';

export const appRoutes : Routes = [
    { path: '', component:TasksComponent},
    { path : 'tasks', component : TasksComponent },
    { path : 'task', component : TaskComponent },
    { path : 'update', component : UpdateTaskComponent },
    { path : 'delete', component : DeleteComponent },
    { path : 'end', component : EndTaskComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}