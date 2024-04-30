import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CivilComponent } from './civil/civil.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PainterComponent } from './painter/painter.component';
import { NopageComponent } from './nopage/nopage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ElectricianComponent } from './electrician/electrician.component';
import { ProjectsComponent } from './projects/projects.component';
import { TilesComponent } from './tiles/tiles.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CivilComponent,
    HomeComponent,
    ContactComponent,
    DashboardComponent,
    FeedbackComponent,
    FurnitureComponent,
    LoginComponent,
    RegistrationComponent,
    PainterComponent,
    NopageComponent,
    ElectricianComponent,
    ProjectsComponent,
    TilesComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
