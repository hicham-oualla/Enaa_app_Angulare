import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsApprenantsComponent } from './abs-apprenants.component';

describe('AbsApprenantsComponent', () => {
  let component: AbsApprenantsComponent;
  let fixture: ComponentFixture<AbsApprenantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbsApprenantsComponent]
    });
    fixture = TestBed.createComponent(AbsApprenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
