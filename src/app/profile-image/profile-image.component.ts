import { Component, Input } from '@angular/core';

@Component({
    selector: 'profile-image',
    template: `
        <div className="pv-image">
        <img src={{src}} alt="profileimage">
        </div>
    `,
    styleUrls: ['./profile-image.component.css']
})
export class ProfileImageComponent {
    @Input() src = '';
}
