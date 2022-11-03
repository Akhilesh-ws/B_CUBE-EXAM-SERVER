import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BoardAdminComponent } from './profile/board-admin/board-admin.component';
import { BoardModeratorComponent } from './profile/board-moderator/board-moderator.component';
import { BoardUserComponent } from './profile/board-user/board-user.component';

const routes: Routes = [
  { path:'',component:HomeComponent,pathMatch:'full',},
  {path:'login',component:LoginComponent},
   
  { path:'signup',   component:SignupComponent,pathMatch:'full',},
  { path:'admin',   component:BoardAdminComponent,pathMatch:'full',},
  { path:'mod',   component:BoardModeratorComponent,pathMatch:'full',},
  { path:'user',   component:BoardUserComponent,pathMatch:'full',},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
