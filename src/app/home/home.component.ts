import {Component} from '@angular/core';
import {Droid, COMMANDS} from './droid';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  droid: Droid;
  commands = Object.keys(COMMANDS)
  showSoundboard = false;

  constructor() {
    this.droid = new Droid();
  }

  async connect() {
    await this.droid.connect();
  }

  toggleSoundboard() {
    this.showSoundboard = !this.showSoundboard;
  }
}
