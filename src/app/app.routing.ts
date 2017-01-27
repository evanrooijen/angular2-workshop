/**
 * Created by Elmer on 27-1-2017.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./notfound/notfound.component";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**' , component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class RoutingModule { }
