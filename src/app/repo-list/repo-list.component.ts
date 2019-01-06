import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { ProfileSearchService } from '../profile-search/profile-search.service';


@Component({
  selector: 'repo-list',
  templateUrl: './repo-list.html',
  styleUrls: ['../profile-search/profile-search.component.css']
})

export class UsersRepoComponent implements OnInit {
  repo$: Observable<any>;

  constructor(private searchService: ProfileSearchService){}

  ngOnInit() {
    
  }

}

