import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { PackageSearchService } from './profile-search.service';

@Component({
  selector: 'profile-search',
  templateUrl: './profile-search.component.html',
  providers: [ PackageSearchService ],
  styleUrls: ['./profile-search.component.css']
})


export class ProfileSearchComponent implements OnInit {
  withRefresh = false;
  user: any;
  private searchText$ = new Subject<string>();
  
  search(packageName: string) {
    this.searchText$.next(packageName);
  }
  

  ngOnInit() {
    this.searchText$.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(packageName =>
        this.searchService.search(packageName, this.withRefresh)
      )
      ).subscribe(
        user => this.user = user
      );
  }

  constructor(
    private searchService: PackageSearchService) {
   }


  toggleRefresh() { this.withRefresh = ! this.withRefresh; }
}


