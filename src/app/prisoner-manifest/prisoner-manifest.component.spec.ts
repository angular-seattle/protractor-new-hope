import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrisonerManifestComponent } from './prisoner-manifest.component';

describe('PrisonerManifestComponent', () => {
  let component: PrisonerManifestComponent;
  let fixture: ComponentFixture<PrisonerManifestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrisonerManifestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrisonerManifestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
