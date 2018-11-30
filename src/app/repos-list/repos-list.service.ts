import { Injectable } from '@angular/core';
import { PackageSearchService } from '../profile-search/profile-search.service';
import { Observable } from 'rxjs';

@Injectable()
export class PackageSearchService1 {

  constructor(private service1: PackageSearchService) {

  }
  do(){
    this.service1.payload();
    console.log('Here is the payload' + this.service1.payload);
    return this.service1;
  }

}