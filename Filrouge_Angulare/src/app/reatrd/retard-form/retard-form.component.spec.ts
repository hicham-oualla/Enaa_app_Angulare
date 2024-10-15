import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetardFormComponent } from './retard-form.component';

describe('RetardFormComponent', () => {
  let component: RetardFormComponent;
  let fixture: ComponentFixture<RetardFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetardFormComponent]
    });
    fixture = TestBed.createComponent(RetardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
