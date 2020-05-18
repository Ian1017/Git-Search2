import { UserComponent } from './user/user.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoComponent } from './repo/repo.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {path: 'user-prof', component: UserComponent},
  {path: 'search-repo', component: RepoComponent},
  {path: '', redirectTo: '/user-prof', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
