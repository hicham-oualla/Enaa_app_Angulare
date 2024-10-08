import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsneceApprenantsComponent } from './absnece-apprenants.component';

describe('AbsneceApprenantsComponent', () => {
  let component: AbsneceApprenantsComponent;
  let fixture: ComponentFixture<AbsneceApprenantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbsneceApprenantsComponent]
    });
    fixture = TestBed.createComponent(AbsneceApprenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
