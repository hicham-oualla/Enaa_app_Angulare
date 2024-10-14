import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetardApprenantComponent } from './retard-apprenant.component';

describe('RetardApprenantComponent', () => {
  let component: RetardApprenantComponent;
  let fixture: ComponentFixture<RetardApprenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetardApprenantComponent]
    });
    fixture = TestBed.createComponent(RetardApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
