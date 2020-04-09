import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserIdleModule } from 'angular-user-idle';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserIdleModule.forRoot({idle: 600, timeout: 300, ping: 120})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
