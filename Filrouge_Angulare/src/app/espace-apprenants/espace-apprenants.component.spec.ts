import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceApprenantsComponent } from './espace-apprenants.component';

describe('EspaceApprenantsComponent', () => {
  let component: EspaceApprenantsComponent;
  let fixture: ComponentFixture<EspaceApprenantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspaceApprenantsComponent]
    });
    fixture = TestBed.createComponent(EspaceApprenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
