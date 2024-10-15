import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRetardComponent } from './update-retard.component';

describe('UpdateRetardComponent', () => {
  let component: UpdateRetardComponent;
  let fixture: ComponentFixture<UpdateRetardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRetardComponent]
    });
    fixture = TestBed.createComponent(UpdateRetardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
