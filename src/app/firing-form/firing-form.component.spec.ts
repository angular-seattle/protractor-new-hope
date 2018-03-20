import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FiringFormComponent } from './firing-form.component';
import { MaterialImportModule } from '../app.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FiringFormModule } from './firing-form.module';

describe('FiringFormComponent', () => {
  let component: FiringFormComponent;
  let fixture: ComponentFixture<FiringFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FiringFormModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiringFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('requires system and orbit', async(async () => {
    let system = fixture.debugElement.query(By.css('input[formControlName="system"]'));
    console.log(system);
    let systemInput = system.nativeElement as HTMLInputElement
    console.log(systemInput.value);
    systemInput.value = 'Degoba';
  }));

  xit('requires at least one authorizing officer with a gold code', async(async () => {
  }));

});
