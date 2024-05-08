import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './services/authguard';
import { Dashboard2Component } from './pages/dashboard2/dashboard2.component';

const routes: Routes = [
  {path: 'login' , component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent , canActivate: [AuthGuard]},
  {path: 'dashboard2', component:Dashboard2Component, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
