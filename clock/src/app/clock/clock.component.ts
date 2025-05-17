import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CLOCK_CONSTANTS as cc} from './clock.constants';

@Component({
  selector: 'app-clock',
  imports: [CommonModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})
export class ClockComponent {
  // Rotation angles
  hourrs: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  clockNumers = this.generateClockNumbers();

  generateClockNumbers() {
    const numbers = [];
    const centerOffset = cc.CENTER_OFFSET;
    const radius = cc.RADIUS;

    for (let i = 1; i <= 12; i++) {
      const angle = (i * cc.DEGREES_PER_HOUR) * cc.DEG_TO_RAD;
      const x = centerOffset + radius * Math.cos(angle);
      const y = centerOffset + radius * Math.sin(angle);
      numbers.push({ number: i, position: { top: `${x}%`, left: y+'%'}});
    }
    return numbers;
  }
}
