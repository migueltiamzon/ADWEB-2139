import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartnersComponent } from './partners/partners.component';
import { JoinusComponent } from './joinus/joinus.component';


const routes: Routes = [
  {path: "home", component: HomeComponent}, 
  {path: "partner", component: PartnersComponent}, 
  {path: "join", component: JoinusComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, PartnersComponent, JoinusComponent]