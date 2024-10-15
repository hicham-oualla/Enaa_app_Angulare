import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogineComponent } from './logine.component';

describe('LogineComponent', () => {
  let component: LogineComponent;
  let fixture: ComponentFixture<LogineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogineComponent]
    });
    fixture = TestBed.createComponent(LogineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
