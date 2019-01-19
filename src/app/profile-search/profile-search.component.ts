import { Component } from '@angular/core';
import { ProfileSearchService  } from './profile-search.service';


@Component({
  selector: 'ghv-profile-search',
  template:`
  <div class="container">
  <div class="searchBox">
  <h1>Profile Search</h1>
  <input #box (keyup.enter)="search(box.value)">
  <ghv-app-messages></ghv-app-messages>
  </div>
  <ghv-profile-show></ghv-profile-show>
  </div>
  `,
  styleUrls: ['./profile-search.css']
})

export class ProfileSearchComponent { 
  constructor(private service: ProfileSearchService) {}

  search (username: string) {
    this.service.search(username);
  };

}