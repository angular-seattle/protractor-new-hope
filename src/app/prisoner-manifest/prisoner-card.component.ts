import { Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'prisoner-card',
  template: `
  <mat-card class="card">
    {{prisoner.name}}
  </mat-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    ".card { width:200px }",
  ]
})
export class PrisonerCardComponent {
  @Input() prisoner: {};
}
