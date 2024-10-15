import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdpateApprenantsComponent } from './udpate-apprenants.component';

describe('UdpateApprenantsComponent', () => {
  let component: UdpateApprenantsComponent;
  let fixture: ComponentFixture<UdpateApprenantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UdpateApprenantsComponent]
    });
    fixture = TestBed.createComponent(UdpateApprenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
