import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseRangeInputComponent } from './base-range-input.component';

describe('BaseFormInputComponent', () => {
  let component: BaseRangeInputComponent;
  let fixture: ComponentFixture<BaseRangeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BaseRangeInputComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseRangeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
