import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import {DashboardComponent} from './dashboard/dashboard.component'

const routes: Routes = [
  {path:'',component :MainComponent},
  {path:'main',component :MainComponent},
  {path:'dashboard',component :DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainComponent];
