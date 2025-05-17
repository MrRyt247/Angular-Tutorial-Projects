import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockTimeService {
  private mockDate: Date = new Date();

  constructor() {
    this.mockDate.setHours(20, 5, 23); // Set to 20:05:23
  }

  getCurrentTime(): Date {
    return this.mockDate;
  }
}
