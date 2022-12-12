import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/:id',
    component: HomeComponent
  },
  // {
  //   path: 'home/lidos',
  //   component: HomeComponent
  // },
  // {
  //   path: 'home/nao-lidos',
  //   component: HomeComponent
  // },
  // {
  //   path: 'home/todos',
  //   component: HomeComponent
  // },
  {
    path: 'about',
    component: AboutComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
