import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  timeRemainingInSeconds: number = 563399; // Example remaining time in seconds

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor(){}

  ngOnInit() {
    this.calculateTime();
    setInterval(() => {
      this.calculateTime();
    }, 1000); // Update every second
  }

calculateTime() {
  this.days = Math.floor(this.timeRemainingInSeconds / (60 * 60 * 24));
  this.hours = Math.floor((this.timeRemainingInSeconds % (60 * 60 * 24)) / (60 * 60));
  this.minutes = Math.floor((this.timeRemainingInSeconds % (60 * 60)) / 60);
  this.seconds = Math.floor(this.timeRemainingInSeconds % 60);

  if (this.timeRemainingInSeconds > 0) {
    this.timeRemainingInSeconds--;
  }
}
}
