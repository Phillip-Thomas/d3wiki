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
import { MarkdownModule } from 'ngx-markdown';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

const config = {
  issuer: 'https://dev-637635.okta.com',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oa27wjykdKiQYlEO357'
};

const firebaseConfig = {
  apiKey: "AIzaSyC29O-PoO-45wzxoyMU_oU9DYyjb0GC6JU",
  authDomain: "flowrolljj.firebaseapp.com",
  databaseURL: "https://flowrolljj.firebaseio.com",
  projectId: "flowrolljj",
  storageBucket: "flowrolljj.appspot.com",
  messagingSenderId: "157974903699"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    IndentedTreeComponent,
    IndentedTreeLeftTopComponent,
    IndentedTreeComponentD3ToAngComp,
    SidebarComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    // OktaAuthModule.initAuth(config),
    AngularFireModule,
    MarkdownModule.forRoot(),
    SafePipeModule,
    CKEditorModule
  ],
  // providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }