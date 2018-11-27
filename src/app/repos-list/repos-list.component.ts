import { Component } from '@angular/core';
import { PackageSearchService1 } from './repos-list.service';

@Component({
    selector: 'repolist',
    templateUrl: '../app.component.html',
    providers: [PackageSearchService1]
  })

export class RepoPackageComponent {
   title='works'

   constructor(private packagesearchservice: PackageSearchService1){}
 }
