import { TestBed, inject } from '@angular/core/testing';

import { BattleLibraryService } from './battle-library.service';

describe('BattleLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BattleLibraryService]
    });
  });

  it('should be created', inject([BattleLibraryService], (service: BattleLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
