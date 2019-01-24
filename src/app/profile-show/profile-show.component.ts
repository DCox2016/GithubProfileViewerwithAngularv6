import { Component, Pipe, PipeTransform } from '@angular/core';
import { ProfileSearchService } from '../profile-search/profile-search.service';



@Component({
  selector: 'ghv-profile-show',
  templateUrl: './profile-show.html',
  styleUrls: ['./profile-show.css']
})

export class ShowProfileComponent {
  profile$ = this.searchService.profile$;
  repos$ = this.searchService.repos$;
 
  constructor(private searchService: ProfileSearchService) {}

}