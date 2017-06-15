/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AgentLibraryService } from './agent-library.service';
import { PREMADE_AGENTS } from "app/agent";
import { AgentType } from "app/agent-type.enum";

export const WITHERING_DAMAGE_TEST: number[][] = [[1, 2, 4, 5], [2, 3, 4], [3, 4, 1], [2, 3], [5, 1], [2, 1, 1]];
export const WITHERING_RESULT_TEST: number[] = [5, 3, 5, 7, 5, 8, 0, 0, -1, 0, 1, 0];
export const DECISIVE_DAMAGE_TEST: number[][] = [[1, 2, 4, 5], [2, 3, 4], [3, 4, 1], [2, 3], [5, 1], [2, 1, 1]];
export const DECISIVE_RESULT_TEST: number[] = [5, 3, 5, 7, 5, 8, 5, 5, 5, 6, 5, 4];

describe('AgentLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgentLibraryService]
    });
  });

  it('should ...', inject([AgentLibraryService], (service: AgentLibraryService) => {
    expect(service).toBeTruthy();
  }));

  it('should have the right test input', inject([AgentLibraryService], (service: AgentLibraryService) => {
    expect(WITHERING_DAMAGE_TEST.length).toBe(PREMADE_AGENTS.length);
    expect(WITHERING_RESULT_TEST.length).toBe(PREMADE_AGENTS.length * 2);
    expect(DECISIVE_DAMAGE_TEST.length * 2).toBe(DECISIVE_RESULT_TEST.length);
  }));

  for (let i = 0; i < WITHERING_DAMAGE_TEST.length; i++) {
      it('should take withering damage on ' + PREMADE_AGENTS[i].title, inject([AgentLibraryService], (service: AgentLibraryService) => {
      const agent = PREMADE_AGENTS[i].clone();
      agent.initiative = 5;
      for (const x of WITHERING_DAMAGE_TEST[i]) {
        agent.takeWitheringDamage(x);
      }
      expect(agent.initiative).toBe(WITHERING_RESULT_TEST[i * 2]);
        expect(agent.damage).toBe(WITHERING_RESULT_TEST[i * 2 + 1]);
  }));
      it('should take decisive damage on ' + PREMADE_AGENTS[i].title, inject([AgentLibraryService], (service: AgentLibraryService) => {
      const agent = PREMADE_AGENTS[i].clone();
      agent.initiative = 5;
      for (const x of DECISIVE_DAMAGE_TEST[i]) {
        agent.takeDecisiveDamage(x);
      }
      expect(agent.initiative).toBe(DECISIVE_RESULT_TEST[i * 2]);
        expect(agent.damage).toBe(DECISIVE_RESULT_TEST[i * 2 + 1]);
  }));
  }

});
