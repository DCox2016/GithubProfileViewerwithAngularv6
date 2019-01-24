import { Component } from '@angular/core';
import { ProfileSearchService  } from './profile-search.service';


@Component({
  selector: 'ghv-profile-search',
  template:`
  <div class="container">
  <div class="gitLogo">
  <img width="100%" alit="Octocat" src="https://github.com/fluidicon.png">
  </div>
  <div class="searchBox">
  <h2>Profile Search</h2>
  <input #box (keyup.enter)="search(box.value)">
  </div>
  </div>
  <ghv-profile-show></ghv-profile-show>
  `,
  styleUrls: ['./profile-search.css']
})

export class ProfileSearchComponent { 
  constructor(private service: ProfileSearchService) {}

  search (username: string) {
    this.service.search(username);
  };

}