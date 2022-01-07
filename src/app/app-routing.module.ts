import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphicsComponent } from './components/dashboard/graphics/graphics.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { LoginComponent } from './components/login/login/login.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dass', component: GraphicsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
