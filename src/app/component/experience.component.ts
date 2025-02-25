import { Component, Input } from '@angular/core';
import { IExperiences } from '../experience.model';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css']
})

export class ExperienceComponent {
    @Input() public experience: IExperiences;
}
