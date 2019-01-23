import { Component, Input } from '@angular/core';

@Component({
    selector: 'profile-image',
    template: `
    <div class="userImage">
        <img src={{src}}>
        </div>
    `,
    styleUrls: ['./profile-image.component.css']
})
export class ProfileImageComponent {
    @Input() src = '';
}
