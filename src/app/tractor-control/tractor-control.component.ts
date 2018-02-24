import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tractor-control',
  templateUrl: './tractor-control.component.html',
  styleUrls: ['./tractor-control.component.css']
})
export class TractorControlComponent implements OnInit {

  frameState = 1;
  testState = 'pass'

  constructor() { }

  ngOnInit() {
  }

  changeTestState(newState: string) {
    this.testState = newState;
    this.resetFrameState();
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
    return `assets/${this.testState}/frame${this.frameState}.png`
  }
}
