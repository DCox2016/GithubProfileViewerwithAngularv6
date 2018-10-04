import { Component } from '@angular/core';



@Component({
    selector: 'pv-repolist',
    template: `
      <div>{{ (profile | async)?.name }}</div>
    `
  })

export class RepoPackageComponent {
  

 }
