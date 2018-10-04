import { Component } from '@angular/core';

@Component ({
   selector: 'pv-sorter',
   template: `
   <p>Sort by:
   <select ng-model="repoSortOrder">
   <option value="+name">Name:Ascending</option>
   <option value="-name">Name:Descending</option>
   <option value="+stargazers_count">Stars:Ascending</option>
   <option value="-stargazers_count">Stars:Descending</option>
   <option value="+language">Language:Ascending</option>
   <option value="-language">Language:Descending</option>
   </select>
   </p> `
})

export class ProfileSorter {
    
}