import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FiringFormComponent } from './firing-form.component';
import { MaterialImportModule } from '../app.module';
import { NgForm, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FiringFormModule } from './firing-form.module';
import { FireButtonHarness } from './testing/fire-button.harness';

// TODO: More of a page-level test describing the entire firing form
describe('FiringFormComponent', () => {
  let component: FiringFormComponent;
  let fixture: ComponentFixture<FiringFormComponent>;
  let orderForm: FormGroup;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FiringFormModule ]
    })
    .compileComponents();
  }));

  let fireButton: FireButtonHarness;

  beforeEach(() => {
    fixture = TestBed.createComponent(FiringFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    orderForm = component.orderForm;
    fireButton = FireButtonHarness.fromElement(fixture.debugElement);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('requires system and orbit', async(async () => {
    orderForm.controls["system"].setValue("");
    orderForm.controls["orbit"].setValue("");
    console.log(orderForm.errors);
    expect(fireButton.isReadyDisabled()).toBe(true);

    orderForm.controls["system"].setValue("Aldebraan");
    orderForm.controls["orbit"].setValue("3");

    // Needed so the firing button will update
    console.log(orderForm.errors);
  }));

  it('requires at least one authorizing officer with a gold code', async(async () => {
    component.setOfficers([{name: 'Tarki', commandCode: 'Gold 1'}]);
  }));

  it('disabled the ready button unless valid', () => {
    orderForm.reset();
    fixture.detectChanges();
    expect(fireButton.isReadyDisabled()).toBe(true);

    orderForm.setValue({
      system: "Alderaan",
      orbit: "3",
      authorizingOfficers: []
    });
    component.setOfficers([{name: 'Tarkin', commandCode: 'Gold 1'}]);
    fixture.detectChanges();
    expect(fireButton.isReadyDisabled()).toBe(false);
  });
});
