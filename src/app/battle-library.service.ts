import { Injectable } from '@angular/core';
import { Battle } from 'app/battle';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Rx';
import { PREMADE_AGENTS } from 'app/agent';

@Injectable()
export class BattleLibraryService {

  public battles: Battle[] = [];
  public openedIndex = (this.battles != null && this.battles.length > 0) ? 0 : -1;
  private openedIndexSubject: BehaviorSubject<number> = new BehaviorSubject<number>(this.openedIndex);

  constructor() {
    this.createNewBattleAndPrepend();
    this.createNewBattleAndPrepend();
    this.createNewBattleAndPrepend();
    this.battles[0].title = 'First battle';
    this.battles[0].description = 'Description of first battle';
    this.battles[0].round = 0;
    this.battles[1].title = 'Second battle';
    this.battles[1].description = 'Description of second battle';
    this.battles[1].round = 1;
    this.battles[2].title = 'Third battle';
    this.battles[2].description = 'Description of third battle';
    this.battles[2].round = 0;

    this.battles[2].actors = [];
    PREMADE_AGENTS.forEach(ag => this.battles[2].actors.push(ag.clone()));
    this.battles[2].actors[4].initiative = 13;
    this.battles[2].actors[2].initiative = 4;
    this.battles[2].actors[0].initiative = 1;
   }

  public storeChangesOfBattle(index: number) {
      // TODO
  }

  public openIndex(index: number) {
    this.openedIndex = index;
    this.openedIndexSubject.next(index);
  }

  public openedIndexRx(): Observable<number> {
    return this.openedIndexSubject;
  }

  public deleteBattleAndSelectNextOne(index: number) {
    const moveDown = index <= this.openedIndex;
    if (index >= 0 && this.battles != null && index < this.battles.length) {
      this.battles.splice(index, 1)
      if (moveDown) {
          this.openedIndex -= 1;
          if (this.openedIndex < 0 && this.battles != null && this.battles.length > 0) {
            this.openedIndex = 0;
          }
      }
    }
  }

  public createNewBattleAndPrepend() {
    if (this.battles != null) {
      this.battles.unshift(new Battle());
    } else {
      this.battles = [new Battle()];
    }
    this.battles[0].title = 'New Battle';
    if (this.openedIndex >= 0 && this.battles != null && this.openedIndex < this.battles.length) {
      this.openedIndex = this.openedIndex + 1;
    } else {
      this.openedIndex = 0;
    }
  }

  public isOpened() {
    return this.battles != null && this.battles.length > this.openedIndex && this.openedIndex >= 0;
  }

  public getOpenBattle() {
    return this.battles[this.openedIndex];
  }

  public isOpenedRx() {
    return this.openedIndexRx().map(i => this.battles != null && i >= 0 && i < this.battles.length);
  }

}
