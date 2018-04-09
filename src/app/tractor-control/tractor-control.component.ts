import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
  useAnimated: boolean;
  dataSource = [{name: '', value: ''}];
  tractorUrl = `/assets/tractor-status-${this.frameState}.json`;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.route.snapshot.queryParamMap.get('use_animated') === "1" ||
        this.route.snapshot.queryParamMap.get('use_animated') === "true") {
      this.useAnimated = true;
    }
    this.getFrameState();
  }

  incrementFrameState() {
    if (this.frameState == 4)
      return;
    this.frameState++;
    this.getFrameState();
  }

  getFrameState() {
    this.tractorUrl = `/assets/tractor_status_${this.frameState}.json`;

    this.http.get(this.tractorUrl).subscribe(data => {
      this.tractorState = data as TractorState;
      if (this.useAnimated) {
        this.asset = '/assets/animated_obiwan.gif';
      } else {
        this.asset = this.tractorState.asset;
      }
      this.dataSource = this.tractorState.status;
    });
  }

  resetFrameState() {
    this.frameState = 1;
    this.getFrameState();
  }
}
