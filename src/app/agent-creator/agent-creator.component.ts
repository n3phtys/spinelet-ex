import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AgentLibraryService } from 'app/agent-library.service';
import { Agent } from 'app/agent';
import { AgentType } from 'app/agent-type.enum';
import { Drill } from 'app/drill.enum';

@Component({
  selector: 'app-agent-creator',
  templateUrl: './agent-creator.component.html',
  styleUrls: ['./agent-creator.component.css']
})
export class AgentCreatorComponent implements OnInit {

  @Output() added = new EventEmitter<Agent>();

  public agent: Agent;

  public drills = Drill;

  public types = AgentType;

  constructor(public agentLibraryService: AgentLibraryService) {
    this.clear();

    this.agent = agentLibraryService.agentsInLibrary[0].clone();
  }

  ngOnInit() {
  }


  clear() {
    this.agent = new Agent();
  }

  addToBattle() {
    this.added.next(Agent.buildFromTemporaryAgent(this.agent));
    this.clear();
  }

  storeInLibrary() {
    this.agentLibraryService.addAgentToLibrary(Agent.buildFromTemporaryAgent(this.agent));
    this.clear();
  }

  loadAgentFromLibrary(template: Agent) {
    this.agent = template.clone();
  }

  deleteAgentInLibrary(index: number) {
    if (confirm('Do you really want to delete this template permanently from your library?')) {
      this.agentLibraryService.deleteByIndex(index);
    }
  }

}
