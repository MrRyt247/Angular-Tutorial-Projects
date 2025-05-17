import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CLOCK_CONSTANTS as cc } from './clock.constants';
import { TimeService } from '../services/time.service';

@Component({
  selector: 'app-clock',
  imports: [CommonModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss',
})
export class ClockComponent implements OnInit {
  // Rotation angles
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  clockNumers = this.generateClockNumbers();

  generateClockNumbers() {
    const numbers = [];
    const centerOffset = cc.CENTER_OFFSET;
    const radius = cc.RADIUS;

    for (let i = 1; i <= 12; i++) {
      const angle = (i - 3) * cc.DEGREES_PER_HOUR * cc.DEG_TO_RAD;
      const x = centerOffset + radius * Math.cos(angle);
      const y = centerOffset + radius * Math.sin(angle);
      numbers.push({ number: i, position: { x: `${x}%`, y: `${y}%` } });
    }
    return numbers;
  }

  constructor(private timeService: TimeService) {
    this.updateClock();
  }

  ngOnInit() {
    this.updateClock();
    setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  updateClock() {
    const now = this.timeService.getCurrentTime();
    this.hours =
      (now.getHours() % 12) * cc.DEGREES_PER_HOUR +
      now.getMinutes() * cc.MINUTE_ADJUSTMENT +
      cc.OFFSET_ROTATION;
    this.minutes =
      now.getMinutes() * cc.DEGREES_PER_MINUTE_SECOND + now.getSeconds() * cc.SECOND_ADJUSTMENT +cc.OFFSET_ROTATION;
    this.seconds =
      now.getSeconds() * cc.DEGREES_PER_MINUTE_SECOND + cc.SECOND_ADJUSTMENT;
  }
}
