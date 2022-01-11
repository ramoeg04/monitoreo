import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

//Components//
import { AppComponent } from './app.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { CreateComponent } from './components/users/create/create.component';
import { EditComponent } from './components/users/edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphicsComponent } from './components/dashboard/graphics/graphics.component';
import { LoginComponent } from './components/login/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { CardsComponent } from './components/dashboard/cards/cards.component';

//Angular Material//
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';




@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreateComponent,
    EditComponent,
    GraphicsComponent,
    LoginComponent,
    DashboardComponent,
    CardsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    //Angular Material
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
