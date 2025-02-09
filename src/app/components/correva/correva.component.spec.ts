import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrevaComponent } from './correva.component';

describe('CorrevaComponent', () => {
  let component: CorrevaComponent;
  let fixture: ComponentFixture<CorrevaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorrevaComponent]
    });
    fixture = TestBed.createComponent(CorrevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
