import { Component } from '@angular/core';
import { ProfileSearchService  } from './profile-search.service';


@Component({
  selector: 'ghv-profile-search',
  template:`
  <div class="container">
  <div class="searchBox">
  <h2>Profile Search</h2>
  <input #box (keyup.enter)="search(box.value)">
  <p>Welcome to Github profile viewer.<br>
  To get started just enter the user's profile name.</p>
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