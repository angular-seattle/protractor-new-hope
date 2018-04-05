import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface TractorState {
  asset?: string;
  status?: Array<{name: string, value: string}>;
}

@Component({
  selector: 'app-tractor-control',
  templateUrl: './tractor-control.component.html',
  styleUrls: ['./tractor-control.component.css']
})
export class TractorControlComponent implements OnInit {
  frameState = 1;
  tractorState: TractorState;
  displayedColumns = ['name', 'value'];
  asset = '';
  dataSource = [{name: '', value: ''}];
  tractorUrl = `/assets/tractor-status-${this.frameState}.json`;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getFrameState();
  }

  incrementFrameState() {
    if (this.frameState == 4)
      return;
    this.frameState++;
    this.getFrameState();
  }

  getFrameState() {
    this.tractorUrl = `/assets/tractor-status-${this.frameState}.json`;
    this.http.get(this.tractorUrl).subscribe(data => {
      this.tractorState = data as TractorState;
      this.asset = this.tractorState.asset;
      this.dataSource = this.tractorState.status;
    });
  }

  resetFrameState() {
    this.frameState = 1;
    this.getFrameState();
  }
}
