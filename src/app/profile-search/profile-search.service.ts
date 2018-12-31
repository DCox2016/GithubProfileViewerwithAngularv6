import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpErrorHandler, HandleError } from '../error-handler.service';
import { map } from 'rxjs/operators';
import { TouchSequence } from 'selenium-webdriver';

export interface PackageInfo {
  login: string
  name: string
  avatar_url: string
  repos_url: string
  
}

export const searchUrl = 'https://api.github.com/users/';

const httpOptions = {
  headers: new HttpHeaders({
    'x-refresh':  'true'
  })
};

function createHttpOptions(packageName: string, refresh = false) {
    const headerMap = refresh ? {'x-refresh': 'true'} : {};
    const headers = new HttpHeaders(headerMap) ;
    return { headers };
}

@Injectable({
  providedIn: 'root'
})

export class PackageSearchService {
  searchResults: Observable<PackageInfo>;
  private handleError: HandleError;
  
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
   ) {
    this.handleError = httpErrorHandler.createHandleError('Service');
  }

  search (packageName: string, refresh = false): Observable<PackageInfo>
   {
    const options = createHttpOptions(packageName, refresh);
    this.searchResults = this.http.get(searchUrl + packageName, options) as Observable<PackageInfo>;
    return this.searchResults
  }

}
