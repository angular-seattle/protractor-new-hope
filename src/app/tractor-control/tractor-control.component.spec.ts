import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TractorControlComponent } from './tractor-control.component';

describe('TractorControlComponent', () => {
  let component: TractorControlComponent;
  let fixture: ComponentFixture<TractorControlComponent>;

  beforeEach(async(async() => {
    await TestBed.configureTestingModule({
      declarations: [ TractorControlComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(TractorControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should click on the image and increment the frame', () => {
    let leverImage = fixture.debugElement.nativeElement
        .querySelector('img.lever');
    let frameState = fixture.debugElement.nativeElement
        .querySelector('span.frame-state');

    for (let i = 1; i < 4; i++) {
      // Check the existing state then in the view.
      expect(frameState.textContent).toContain(i);

      // Click the image and update the view.
      leverImage.click();

      // After clicking the component, the component's frameState property
      // incremented by 1 but the view is the same.
      expect(component.frameState).toEqual(i + 1);
      expect(frameState.textContent).toContain(i);

      fixture.detectChanges();

      // After detecting the change, the view has been updated.
      expect(frameState.textContent).toContain(i + 1);
    }
    // After clicking on the element, the frame state will not increment.
    expect(component.frameState).toEqual(4);
    expect(frameState.textContent).toContain(4);
  });
});
