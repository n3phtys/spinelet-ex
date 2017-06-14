import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
      if (this.battleLibraryService.getOpenBattle() != null) {
      this.battleLibraryService.getOpenBattle().actors.forEach(a => this.sortedAgents.push(a));
      }
      this.sortedAgents.sort((a, b) => b.initiative -  a.initiative + 1)
    }
  }

  refreshForce() {
    if (this.battleLibraryService.isOpened()) {
    this.battleLibraryService.getOpenBattle().actors.forEach(element => {
      element.recomputeBackgroundColor();
    });
    }
  }

  endRound() {
    let finished = true;
    this.battleLibraryService.getOpenBattle().actors.forEach(a => {
      if (finished && !a.hasActedThisRound && a.active) {
        finished = false;
      }
    });
    if (finished || confirm('Not every agent has made an Action this round, do you really want to end this round?')) {
      this.battleLibraryService.getOpenBattle().increaseRound();
      this.refreshForce();
    }
  }
}
