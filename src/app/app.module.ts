import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { CreateComponent } from './create/create.component';
import { MessageService } from './services/message.service';
import { EditComponent } from './edit/edit.component';
import { ReversePipe } from './reverse.pipe';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'edit',
    component: EditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**', redirectTo: '/'
  }
]

const firebaseConfig = {
  apiKey: "AIzaSyC1s6B69lEbX2V7ngnUtZnQJoxWNYv2xXk",
  authDomain: "angular-message-board-4e98f.firebaseapp.com",
  databaseURL: "https://angular-message-board-4e98f.firebaseio.com",
  projectId: "angular-message-board-4e98f",
  storageBucket: "angular-message-board-4e98f.appspot.com",
  messagingSenderId: "796680067094"
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    CreateComponent,
    EditComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
