import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { GraphicsComponent } from './components/dashboard/graphics/graphics.component';
import { LoginComponent } from './components/login/login/login.component';

const routes: Routes = [
  {
  path: '', component: AppComponent, children:
  [
      {
          path: "", component: LoginComponent, pathMatch: 'full'
      },
      {
        path: "home", component: DashboardComponent, pathMatch: 'full'
    },
      {
          path: "login", component: LoginComponent, pathMatch: 'full'
      }
     

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
