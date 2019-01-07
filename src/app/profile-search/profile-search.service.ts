import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, Subject, interval, Observable } from 'rxjs';
import { shareReplay, tap, take, pluck } from 'rxjs/operators';

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
 
 
  constructor(private http: HttpClient) {
    this.profile.subscribe(({ repos_url }) => {
      if (repos_url) {
        // http request, set repoFetch to return value
        this.http.get(repos_url).pipe(
          tap(repos => this.repos.next(repos as any[]))
        ).subscribe();;
      }
    });
  }

  search (packageName: string): Observable<ProfileInfo> {
    const searchReturn = this.http.get(searchUrl + packageName) as Observable<ProfileInfo>;
    return searchReturn;
  }

}