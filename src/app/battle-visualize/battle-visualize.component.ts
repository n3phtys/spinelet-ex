import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BattleLibraryService } from 'app/battle-library.service';
import { Agent } from 'app/agent';
import { Subject } from 'rxjs/Rx';
import { Battle } from "app/battle";

@Component({
  selector: 'app-battle-visualize',
  templateUrl: './battle-visualize.component.html',
  styleUrls: ['./battle-visualize.component.css']
})
export class BattleVisualizeComponent implements OnInit {

  public sortedAgents: Agent[] = null;
  private battleStoring: Subject<boolean> = new Subject<boolean>();

  private battle: Battle = null;


  constructor(public battleLibraryService: BattleLibraryService) {
    // store once every 10s
    this.battleStoring.sampleTime(1000).subscribe(a => {
      console.log('Debounced Storing Triggered');
      this.battleLibraryService.storeChangesOfBattle(this.battleLibraryService.getIndex());
    });

    this.battleLibraryService.battleRx.subscribe(b => {
      this.battle = b;
      this.resort()
    });
  }

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
    this.saveBattle();
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
      this.battleLibraryService.storeChangesOfBattle(0);
    }
  }

  saveBattle() {
    console.log('Before debounce');
    this.battleStoring.next(true);
  }
}
