import { Component, OnInit } from '@angular/core';
import { AgentLibraryService } from "app/agent-library.service";

@Component({
  selector: 'app-agent-creator',
  templateUrl: './agent-creator.component.html',
  styleUrls: ['./agent-creator.component.css']
})
export class AgentCreatorComponent implements OnInit {

  constructor(public agentLibraryService: AgentLibraryService) { }

  ngOnInit() {
  }

}
