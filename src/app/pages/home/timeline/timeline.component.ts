import { Component } from '@angular/core';
import { ParallaxDirective } from '../../../shared/parallax.directive';

@Component({
  standalone: true,
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  imports: [ParallaxDirective]
})
export class TimelineComponent { }