import { Injectable } from '@angular/core';
import { Battle } from 'app/battle';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class BattleLibraryService {

  public battles: Battle[] = [];
  private openedIndex = (this.battles != null && this.battles.length > 0) ? 0 : -1;
  private openedIndexSubject: BehaviorSubject<number> = new BehaviorSubject<number>(this.openedIndex);

  constructor() { }

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

  public deleteOpenedBattleAndSelectNextOne() {
    if (this.openedIndex >= 0 && this.battles != null && this.openedIndex < this.battles.length) {
      this.battles.splice(this.openedIndex, 1)
    }
  }

  public createNewBattleAndPrepend() {
    if (this.battles != null) {
      this.battles.unshift(new Battle());
    } else {
      this.battles = [new Battle()];
    }
    if (this.openedIndex >= 0 && this.battles != null && this.openedIndex < this.battles.length) {
      this.openedIndex = this.openedIndex + 1;
    } else {
      this.openedIndex = 0;
    }
  }

  public isOpened() {
    return this.battles != null && this.battles.length > this.openedIndex && this.openedIndex >= 0;
  }

  public isOpenedRx() {
    return this.openedIndexRx().map(i => this.battles != null && i >= 0 && i < this.battles.length);
  }

}
