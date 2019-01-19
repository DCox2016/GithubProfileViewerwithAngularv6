import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

export interface ProfileInfo {
  login: string
  name: string
  avatar_url: string
  repos_url: string
}

export const searchUrl = 'https://api.github.com/users/';

@Injectable({
  providedIn: 'root'
})
export class ProfileSearchService {
  profile: BehaviorSubject<ProfileInfo> = new BehaviorSubject({ login: '', name: '', avatar_url: '', repos_url: '' });
  repos: BehaviorSubject<any[]> = new BehaviorSubject([]);
  private handleError: HandleError;
 
 
  constructor(private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ProfileSearchService');
    this.profile.subscribe(({ repos_url }) => {
      if (repos_url) {
        // http request, set repoFetch to return value
        this.http.get(repos_url).pipe(
          tap((result: any) => this.repos.next(result))
        ).subscribe();
      }
    });
  }

  search(username: string) {
    this.http.get(searchUrl + username).pipe(
      tap((result: ProfileInfo) => this.profile.next(result)),
      catchError(this.handleError('Users', []))
    ).subscribe();
  }

}