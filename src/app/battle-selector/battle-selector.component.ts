import { Component, OnInit } from '@angular/core';
import { BattleLibraryService } from 'app/battle-library.service';

@Component({
  selector: 'app-battle-selector',
  templateUrl: './battle-selector.component.html',
  styleUrls: ['./battle-selector.component.css']
})
export class BattleSelectorComponent implements OnInit {

  constructor(public battleLibraryService: BattleLibraryService) {

  }

  ngOnInit() {
  }


  delete(idx: number) {
    console.log('pressed delete: ' + idx);
    this.battleLibraryService.deleteBattleAndSelectNextOne(idx);
  }

  addBattle() {
    console.log('pressed addBattle');
    this.battleLibraryService.createNewBattleAndPrepend();
  }

  select(idx: number) {
    console.log('pressed select: ' + idx);
    this.battleLibraryService.openIndex(idx);
  }
}
