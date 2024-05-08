import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TableComponent } from './pages/dashboard/table/table.component';
import { AddTableComponent } from './pages/dashboard/add-table/add-table.component';
import { EditTableComponent } from './pages/dashboard/edit-table/edit-table.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './services/authguard';
import { Dashboard2Component } from './pages/dashboard2/dashboard2.component';
import { TableSuerComponent } from './pages/dashboard2/table-suer/table-suer.component';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TableComponent,
    AddTableComponent,
    EditTableComponent,
    LoginComponent,
    NavbarComponent,
    TableSuerComponent,
    Dashboard2Component,
    TableSuerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatSlideToggleModule,
  ],
  providers: [
    AuthenticationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
