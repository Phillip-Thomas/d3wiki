import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { IndentedTreeComponent } from './indented-tree/indented-tree.component';
import { IndentedTreeLeftTopComponent } from './indented-tree-left-top/indented-tree-left-top.component';
import { IndentedTreeComponentD3ToAngComp } from './indented-tree-pass-data-to-angular-comp/indented-tree.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SafePipeModule} from 'safe-pipe'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OktaAuthModule } from '@okta/okta-angular';
import { AuthInterceptor } from './shared/okta/auth.interceptor';
import { AngularFireModule} from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { MarkdownModule } from 'ngx-markdown';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { LoginComponent } from './login/login.component';
import { MainAppComponent } from './main-app/main-app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AuthService } from './auth.service';


const firebaseConfig = {
  apiKey: "AIzaSyCcz5Zpassrkt9_xQAdbuF3jMG6dd5jWGk",
  authDomain: "frjj2-0.firebaseapp.com",
  databaseURL: "https://frjj2-0-default-rtdb.firebaseio.com",
  projectId: "frjj2-0",
  storageBucket: "frjj2-0.appspot.com",
  messagingSenderId: "272744452670",
  appId: "1:272744452670:web:62d21e3b9c4d3ddee5b76f",
  measurementId: "G-BYQTQ9BB29" 
};

@NgModule({
  declarations: [
    BsNavbarComponent,
    AppComponent,
    HomeComponent,
    EditComponent,
    IndentedTreeComponent,
    IndentedTreeLeftTopComponent,
    IndentedTreeComponentD3ToAngComp,
    SidebarComponent,
    LoginComponent,
    MainAppComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    // OktaAuthModule.initAuth(config),
    AngularFireModule,
    MarkdownModule.forRoot(),
    SafePipeModule,
    CKEditorModule,
    NgbModule
  ],
  // providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
