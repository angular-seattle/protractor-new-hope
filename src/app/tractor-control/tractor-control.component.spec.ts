import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TractorControlComponent } from './tractor-control.component';

fdescribe('TractorControlComponent', () => {
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
    let debugButton = fixture.debugElement.nativeElement
        .querySelector('button.tractorbeam-debug');
    let testState = fixture.debugElement.nativeElement
        .querySelector('span.test-state');

    expect(component.testState).toEqual('pass');
    debugButton.click();

    // The testState should change because the class variable changed.
    expect(component.testState).toEqual('debug');
    // The template should not change because we did not call detectChanges.
    expect(testState.textContent).toContain('/pass/');

    // After we detect changes the template and the class variable reflect the changes.
    fixture.detectChanges();
    expect(component.testState).toEqual('debug');
    expect(testState.textContent).toContain('/debug/');
  });

  it('should click on the image and increment the frame', () => {
    let leverImage = fixture.debugElement.nativeElement
        .querySelector('img.lever');
    let frameState = fixture.debugElement.nativeElement
        .querySelector('span.frame-state');

    for (let i = 1; i <= 4; i++) {
      // Check the existing state then...
      expect(component.frameState).toEqual(i);
      expect(frameState.textContent).toContain(i);

      // ...click the image and update the view.
      leverImage.click();
      fixture.detectChanges();
    }
    // After clicking on the element, the frame state will not increment.
    expect(component.frameState).toEqual(4);
    expect(frameState.textContent).toContain(4);
  });
});
