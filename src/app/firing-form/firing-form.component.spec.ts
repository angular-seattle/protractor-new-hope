import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiringFormComponent } from './firing-form.component';

describe('FiringFormComponent', () => {
  let component: FiringFormComponent;
  let fixture: ComponentFixture<FiringFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiringFormComponent ]
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
});
