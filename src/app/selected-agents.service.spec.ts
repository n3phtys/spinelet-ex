/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SelectedAgentsService } from './selected-agents.service';

describe('SelectedAgentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedAgentsService]
    });
  });

  it('should ...', inject([SelectedAgentsService], (service: SelectedAgentsService) => {
    expect(service).toBeTruthy();
  }));
});
