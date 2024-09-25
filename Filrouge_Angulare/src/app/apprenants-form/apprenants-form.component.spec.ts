import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprenantsFormComponent } from './apprenants-form.component';

describe('ApprenantsFormComponent', () => {
  let component: ApprenantsFormComponent;
  let fixture: ComponentFixture<ApprenantsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprenantsFormComponent]
    });
    fixture = TestBed.createComponent(ApprenantsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
