import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

export class Officer {
  name: string = '';
  commandCode: string = '';
}

export class FiringOrder {
  system: string;
  orbit: number;
  authorizingOfficers: Officer[];
}

/* TODO: Validators
all fields required
at least one authorizing officer with a gold command code
*/
@Component({
  selector: 'app-firing-form',
  templateUrl: './firing-form.component.html',
  styleUrls: ['./firing-form.component.css']
})
export class FiringFormComponent implements OnInit {
  private startTime = 0;
  orderForm: FormGroup;
  order: FiringOrder;

  constructor(private fb: FormBuilder) { }

  createForm() {
    this.orderForm = this.fb.group({
      system: 'Alderaan',
      orbit: '',
      authorizingOfficers: this.fb.array([])
    });
  }

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  rebuildForm() {
    this.orderForm.reset({
      name: this.order.system,
      orbit: this.order.orbit,
      authorizingOfficers: this.setOfficers(this.order.authorizingOfficers)
    });
    this.setOfficers(this.order.authorizingOfficers);
  }

  get officers(): FormArray {
    return this.orderForm.get('authorizingOfficers') as FormArray;
  };

  setOfficers(officers: Officer[]) {
    const officersFGs = officers.map(officer => this.fb.group(officer));
    this.orderForm.setControl('authorizingOfficers', this.fb.array(officersFGs));
  }

  addOfficer() {
    this.officers.push(this.fb.group(new Officer()));
    console.log(this.officers)
  }

  removeOfficer(index) {
    this.officers.removeAt(index);
  }

  onSubmit() {
    console.log('Submitting!');
  }
}
