import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ResetComponent } from './pages/reset/reset.component';

const routes: Routes = [
  {path: 'register', component : RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forget', component: ForgetPasswordComponent},
  {path: 'reset', component: ResetComponent},
  {path: 'dashboard', component: DashBoardComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
