import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppmainComponent } from './components/appmain/appmain.component';
import { AppsigninComponent } from './components/appsignin/appsignin.component';
import { DownloadComponent } from './components/download/download.component';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { Index2Component } from './components/index2/index2.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo : 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'login',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'index2',
    component: Index2Component
  },
  {
    path: 'download',
    component: DownloadComponent
  },
  {
    path: 'applogin',
    component: AppsigninComponent
  },
  {
    path: 'viewall',
    component: AppmainComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
