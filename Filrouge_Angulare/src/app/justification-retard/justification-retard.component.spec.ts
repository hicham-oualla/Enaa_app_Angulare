import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustificationRetardComponent } from './justification-retard.component';

describe('JustificationRetardComponent', () => {
  let component: JustificationRetardComponent;
  let fixture: ComponentFixture<JustificationRetardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JustificationRetardComponent]
    });
    fixture = TestBed.createComponent(JustificationRetardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
