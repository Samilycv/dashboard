import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { LeadsComponent } from './leads/leads.component';

const routes: Routes = [
  {
    path:'',component:MainContentComponent
  },
  {
  path:'gallery',component:GalleryComponent
  },
  {
    path:'employees',component:EmployeesComponent
  },
  {
    path:'addemployee',component:AddemployeeComponent
  },
  {
    path:'leads',component:LeadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
