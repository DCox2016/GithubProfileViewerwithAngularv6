import { Component, OnInit } from '@angular/core';
import { PackageSearchService1 } from './repos-list.service';


@Component({
    selector: 'pv-repolist',
    templateUrl: './repos-list.component.html',
    providers: [ PackageSearchService1 ]
  })

export class RepoPackageComponent {
  title='works';

   ngOnInit(){

   }
   constructor(private packageSearch1: PackageSearchService1){
  }
 }
