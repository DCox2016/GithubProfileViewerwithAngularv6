import { Component, Input } from '@angular/core';

@Component({
    selector: 'profile-image',
    template: `
    <div class="userImage">
        <img width="100%" src={{src}}>
        </div>
    `,
    styleUrls: ['./profile-image.component.css']
})
export class ProfileImageComponent {
    @Input() src = '';
}
