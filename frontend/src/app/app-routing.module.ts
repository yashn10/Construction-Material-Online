import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CivilComponent } from './civil/civil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PainterComponent } from './painter/painter.component';
import { NopageComponent } from './nopage/nopage.component';
import { ContactComponent } from './contact/contact.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { ElectricianComponent } from './electrician/electrician.component';
import { ProjectsComponent } from './projects/projects.component';
import { TilesComponent } from './tiles/tiles.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'interior',
    component: TilesComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'signup',
    component: RegistrationComponent
  },
  {
    path: 'civil',
    component: CivilComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'painter',
    component: PainterComponent
  },
  {
    path: 'furniture',
    component: FurnitureComponent
  },
  {
    path: 'electrical',
    component: ElectricianComponent
  },
  {
    path: '**',
    component: NopageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
