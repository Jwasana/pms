import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [
  {
    path: "",
    component: TaskComponent
  },
  {
    path: "task",
    component: TaskComponent},
    {
      path: "project",
      component: ProjectComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
