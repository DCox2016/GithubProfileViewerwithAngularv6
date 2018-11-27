import { Injectable } from '@angular/core';
import { PackageSearchService } from '../profile-search/profile-search.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PackageSearchService1 {
  searchResults: any;
 
  constructor(
    private packagesearchservice: PackageSearchService,
    private http: HttpClient
    ) {}

  search(){
  }

}