import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayqueComponent } from './displayque.component';

describe('DisplayqueComponent', () => {
  let component: DisplayqueComponent;
  let fixture: ComponentFixture<DisplayqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
