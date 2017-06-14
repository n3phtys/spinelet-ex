import { Injectable } from '@angular/core';
import { PREMADE_AGENTS, Agent } from 'app/agent';

@Injectable()
export class AgentLibraryService {

  static readonly AgentLibraryLocalKey = 'SPINELETEX_AgentLibrary';

  public agentsInLibrary: Agent[] = PREMADE_AGENTS;

  constructor() {
    const value = localStorage.getItem(AgentLibraryService.AgentLibraryLocalKey)
    if (value != null) {
      console.log('loading Agent Library from localStorage')
      const list = Agent.fromJsonArray(value);
      this.agentsInLibrary = list;
    } else {
      console.log('Using Mock Agent Library');
    }
  }


  addAgentToLibrary(agent: Agent) {
    this.agentsInLibrary.push(agent);
    localStorage.setItem(AgentLibraryService.AgentLibraryLocalKey, JSON.stringify(this.agentsInLibrary));
// TODO
  }

  deleteByIndex(index: number) {
      this.agentsInLibrary.splice(index, 1);
    localStorage.setItem(AgentLibraryService.AgentLibraryLocalKey, JSON.stringify(this.agentsInLibrary));
// TODO
  }

  public import(imp: Agent[]) {
    this.agentsInLibrary = imp;
    localStorage.setItem(AgentLibraryService.AgentLibraryLocalKey, JSON.stringify(this.agentsInLibrary));
  }

}
