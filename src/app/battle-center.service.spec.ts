import { TestBed, inject } from '@angular/core/testing';

import { BattleCenterService } from './battle-center.service';

describe('BattleCenterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BattleCenterService]
    });
  });

  it('should be created', inject([BattleCenterService], (service: BattleCenterService) => {
    expect(service).toBeTruthy();
  }));
});
