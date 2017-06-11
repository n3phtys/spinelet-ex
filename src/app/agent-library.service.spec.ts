/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AgentLibraryService } from './agent-library.service';

describe('AgentLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgentLibraryService]
    });
  });

  it('should ...', inject([AgentLibraryService], (service: AgentLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
