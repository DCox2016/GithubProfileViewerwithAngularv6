import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpErrorHandler }     from './http-error-handler.service';
import { MessageService }       from './message.service';
import { MessagesComponent } from './message/message.component'
import { ProfileImageComponent } from './profile-image/profile-image.component';
import { HeaderComponent } from './common/header.component';
import { FooterComponent } from './common/footer.component';
import { ShowProfileComponent } from './profile-show/profile-show.component';
import { ProfileSearchComponent } from './profile-search/profile-search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProfileImageComponent,
    ShowProfileComponent,
    ProfileSearchComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
