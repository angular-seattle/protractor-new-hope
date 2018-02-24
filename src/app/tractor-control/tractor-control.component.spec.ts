import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TractorControlComponent } from './tractor-control.component';

describe('TractorControlComponent', () => {
  let component: TractorControlComponent;
  let fixture: ComponentFixture<TractorControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TractorControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TractorControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should switch state to debug', () => {
    let button = fixture.debugElement.nativeElement.querySelector('button.tractorbeam-debug');
    button.click();
    expect(component.testState).toEqual('debug');
  });
});
