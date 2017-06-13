import { Component, OnInit } from '@angular/core';
import { BattleLibraryService } from 'app/battle-library.service';
import { Agent } from "app/agent";

@Component({
  selector: 'app-battle-visualize',
  templateUrl: './battle-visualize.component.html',
  styleUrls: ['./battle-visualize.component.css']
})
export class BattleVisualizeComponent implements OnInit {

  public sortedAgents: Agent[] = null;

  constructor(public battleLibraryService: BattleLibraryService) { }

  ngOnInit() {
    this.resort();
  }

  resort() {
    // TODO: implement better

    if (this.battleLibraryService.isOpened()) {
      this.sortedAgents = [];
      this.battleLibraryService.getOpenBattle().actors.forEach(a => this.sortedAgents.push(a));
      this.sortedAgents.sort((a, b) => b.initiative -  a.initiative + 1)
    }
  }

}
