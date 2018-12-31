import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { RepoList } from '../repoList'
import { Observable, Subject} from 'rxjs';
import { PackageSearchService } from '../profile-search/profile-search.service';




@Injectable({
    providedIn: 'root'
})

export class RepoListComponent{

    constructor(private http: HttpClient,
        private searchService: PackageSearchService){}

    private repoList = 'https://api.github.com/users/dcox2016/repos'


    getRepoReturn(): Observable<RepoList[]> {
      return this.http.get<RepoList[]>(this.repoList)
    }

}
