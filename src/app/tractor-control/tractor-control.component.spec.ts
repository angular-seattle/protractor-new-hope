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

  it('should create', () => {
    expect(component).toBeTruthy();
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
