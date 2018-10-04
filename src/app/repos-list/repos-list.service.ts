import { Injectable } from '@angular/core';
import { PackageSearchService } from '../profile-search/profile-search.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export interface RepoPackageInfo {
  name: string
  lanaguage: string
  stargazers_count: number
}

@Injectable()
export class RepoSearchService {

}