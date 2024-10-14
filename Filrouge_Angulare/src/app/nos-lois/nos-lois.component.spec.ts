import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosLoisComponent } from './nos-lois.component';

describe('NosLoisComponent', () => {
  let component: NosLoisComponent;
  let fixture: ComponentFixture<NosLoisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NosLoisComponent]
    });
    fixture = TestBed.createComponent(NosLoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
