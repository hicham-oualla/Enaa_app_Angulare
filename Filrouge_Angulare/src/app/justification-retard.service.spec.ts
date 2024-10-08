import { TestBed } from '@angular/core/testing';

import { JustificationRetardService } from './justification-retard.service';

describe('JustificationRetardService', () => {
  let service: JustificationRetardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JustificationRetardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
