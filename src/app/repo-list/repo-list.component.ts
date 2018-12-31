import { Component, OnInit } from '@angular/core';
import { RepoListComponent } from './repo-list.services';
import { PackageSearchService, PackageInfo } from '../profile-search/profile-search.service';
import { RepoList } from '../repoList';
import { Observable, Subscription } from 'rxjs';



@Component({
  selector: 'repo-list',
  templateUrl: './repo-list.html',
  styleUrls: ['../profile-search/profile-search.component.css']
})

export class UsersRepoComponent implements OnInit {
  repo: RepoList[] = [];

  
  constructor( private repoService : RepoListComponent,
    private searchService: PackageSearchService){}

   

  ngOnInit(){
    this.getRepoList(); 
}
  

  getRepoList(): void {
    this.repoService.getRepoReturn()
    .subscribe(repo => this.repo = repo);
  }

}

