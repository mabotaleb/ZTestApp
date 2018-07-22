import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from '@angular/forms'
import{AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import{AngularFireAuthModule} from 'angularfire2/auth'
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import{ToastrModule} from 'ngx-toastr'

import { AppComponent } from './app.component';
import {environment} from "../environments/environment";
import { ToDosComponent } from './to-dos/to-dos.component';
import { ToDoComponent } from './to-dos/to-do/to-do.component';
import { ToDoListComponent } from './to-dos/to-do-list/to-do-list.component';
import { RegisterComponentComponent } from './user/register-component/register-component.component';
import { LoginComponentComponent } from './user/login-component/login-component.component';

import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostsListComponent } from './posts-list/posts-list.component'
import { ViewUsersComponent } from './view-users/view-users.component';

const appRoutes: Routes = [
  { path: 'register', component: RegisterComponentComponent },
  {path: '', component: UserComponent},
  { path: 'login', component: LoginComponentComponent },
  {path: 'home', component: ToDosComponent, canActivate: [AuthGuard]},
  { path: '**', component: NotFoundComponent }
]; 

@NgModule({
  declarations: [
    AppComponent,
    ToDosComponent,
    ToDoComponent,
    ToDoListComponent,
    RegisterComponentComponent,
    LoginComponentComponent,
    NotFoundComponent,
    UserComponent,
    EditPostComponent,
    PostsListComponent,
    ViewUsersComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    AngularFireAuthModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
