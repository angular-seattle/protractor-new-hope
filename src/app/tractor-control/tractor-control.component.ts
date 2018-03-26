import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tractor-control',
  templateUrl: './tractor-control.component.html',
  styleUrls: ['./tractor-control.component.css']
})
export class TractorControlComponent implements OnInit {

  frameState = 1;

  constructor() { }

  ngOnInit() {
  }

  incrementFrameState() {
    if (this.frameState == 4)
      return;
    this.frameState++;
  }

  resetFrameState() {
    this.frameState = 1;
  }

  getFrame(): string {
    return `assets/frame${this.frameState}.png`
  }
}
