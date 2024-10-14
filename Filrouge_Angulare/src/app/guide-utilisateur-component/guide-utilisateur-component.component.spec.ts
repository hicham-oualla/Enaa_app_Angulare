import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideUtilisateurComponentComponent } from './guide-utilisateur-component.component';

describe('GuideUtilisateurComponentComponent', () => {
  let component: GuideUtilisateurComponentComponent;
  let fixture: ComponentFixture<GuideUtilisateurComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuideUtilisateurComponentComponent]
    });
    fixture = TestBed.createComponent(GuideUtilisateurComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
