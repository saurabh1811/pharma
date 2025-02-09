import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtrPtsCalculatorComponent } from './ptr-pts-calculator.component';

describe('PtrPtsCalculatorComponent', () => {
  let component: PtrPtsCalculatorComponent;
  let fixture: ComponentFixture<PtrPtsCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PtrPtsCalculatorComponent]
    });
    fixture = TestBed.createComponent(PtrPtsCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
