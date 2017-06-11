import { Injectable } from '@angular/core';
import { PREMADE_AGENTS, Agent } from 'app/agent';

@Injectable()
export class AgentLibraryService {


  public agentsInLibrary: Agent[] = PREMADE_AGENTS;

  constructor() { }


}
