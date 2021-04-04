import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppsigninComponent } from './components/appsignin/appsignin.component';
import { DownloadComponent } from './components/download/download.component';
import { HomeComponent } from './components/home/home.component';
import { HomesectionComponent } from './components/home/homesection/homesection.component';
import { ViewallComponent } from './components/home/viewall/viewall.component';
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
    path: 'home',
    component: HomeComponent,
    children:[
      {
        path: '',
        redirectTo : 'songs',
        pathMatch: 'full'
      },
      {
        path: 'songs',
        component: HomesectionComponent
      },
      {
        path: 'view',
        component: ViewallComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
