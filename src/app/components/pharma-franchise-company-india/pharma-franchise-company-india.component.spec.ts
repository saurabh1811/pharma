import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaFranchiseCompanyIndiaComponent } from './pharma-franchise-company-india.component';

describe('PharmaFranchiseCompanyIndiaComponent', () => {
  let component: PharmaFranchiseCompanyIndiaComponent;
  let fixture: ComponentFixture<PharmaFranchiseCompanyIndiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PharmaFranchiseCompanyIndiaComponent]
    });
    fixture = TestBed.createComponent(PharmaFranchiseCompanyIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
