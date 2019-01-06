import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProfileSearchService } from './profile-search.service';
import { fromEvent, Observable, Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';


@Component({
  selector: 'profile-search',
  templateUrl: './profile-search.component.html',
  providers: [ ProfileSearchService ],
  styleUrls: ['./profile-search.component.css']
})


export class ProfileSearchComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('subject') subject: any;
  searchEvent: Observable<any>;
  repos: Observable<any[]>;
  user = this.searchService.profile;
 
  constructor(private searchService: ProfileSearchService) {}

  ngOnInit() {
    this.searchEvent = fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      debounceTime(1000),
      switchMap(() => this.searchService.search(this.searchInput.nativeElement.value))
    );
    this.showMe();
  }

  showMe(){
    //this.searchService.setTicks();
  }
 
}