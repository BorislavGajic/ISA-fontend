import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminKcLayoutComponent } from './administrator-kc/admin-kc-layout/admin-kc-layout.component';
import { RegComponent} from '../app/registracija/reg/reg.component';
import {LogovanjeComponent} from './registracija/logovanje/logovanje.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin-kc',
    pathMatch: 'full',
  }, {
    path: 'admin-kc',
    component: AdminKcLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './administrator-kc/admin-kc-layout/admin-kc-layout.module#AdminKcLayoutModule'
      }]}
  , {
    path: 'registracija',
    component: RegComponent,
    children: [
]}, {
    path: 'logovanje',
    component: LogovanjeComponent,
    children: [
    ]}

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }