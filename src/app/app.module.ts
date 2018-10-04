import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpErrorHandler }     from './error-handler.service';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';
import { ProfileSearchComponent } from './profile-search/profile-search.component';
import { ProfileImageComponent } from './profile-image/profile-image.component';
import { RepoPackageComponent } from './repos-list/repos-list.component';
import { ProfileSorter } from './sort-repos-list/sort-repos-list.component';
import { HeaderComponent } from './common/header.component';
import { FooterComponent } from './common/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileSearchComponent,
    MessagesComponent,
    HeaderComponent,
    FooterComponent,
    ProfileImageComponent,
    RepoPackageComponent,
    ProfileSorter
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpErrorHandler,
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
