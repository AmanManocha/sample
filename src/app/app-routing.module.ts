import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'Register',
    component:RegisterComponent,
  },
  {
    path:'login',
    component:LoginComponent,
  }




]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


1234567894556516654565266555
1985151951561919191518718718777
1234656895596
