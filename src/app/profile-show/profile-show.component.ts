import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProfileSearchService } from '../profile-search/profile-search.service';
import { fromEvent, Observable, Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';


@Component({
  selector: 'profile-show',
  templateUrl: './profile-show.html',
  providers: [ ProfileSearchService ],
  styleUrls: ['./profile-show.css']
})


export class ShowProfileComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  user$: Observable<any>;
  repos: Observable<any[]>;
  user = this.searchService.profile;
 
  constructor(private searchService: ProfileSearchService) {}

  ngOnInit() {
    this.user$ = fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      debounceTime(1000),
      switchMap(() => this.searchService.search(this.searchInput.nativeElement.value))
    );
  }

}