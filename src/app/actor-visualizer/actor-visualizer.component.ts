import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Actor } from 'app/actor';
import { Drill } from 'app/drill.enum';
import { InterComponentInteraction } from 'app/inter-component-interaction.enum'
import { CustomCondition } from 'app/custom-condition';

@Component({
  selector: 'app-actor-visualizer',
  templateUrl: './actor-visualizer.component.html',
  styleUrls: ['./actor-visualizer.component.css']
})
export class ActorVisualizerComponent implements OnInit, OnChanges {
  public Drill = Drill;

  @Input() actor: Actor = null;

  @Input() battleChange: InterComponentInteraction = null;

  @Output() actorChange = new EventEmitter<InterComponentInteraction>();

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['battleChange'].currentValue !== changes['battleChange'].previousValue &&
    changes['battleChange'].currentValue === InterComponentInteraction.RoundRefreshed) {
      if (this.actor != null) {
        this.actor.resetAction();
      }
    }
  }






  commitAction() {
    this.actor.commitAction();
    this.actorChange.next(InterComponentInteraction.ActionThisRound);
  }

  disableEnable() {
    if (this.actor != null) {
      if (this.actor.active) {
        this.actor.disable();
      } else {
        this.actor.disable();
      }
      this.actorChange.next(InterComponentInteraction.ActorEnableChange);
    }
  }

  remove() {
    if (this.actor != null && confirm('Do you really want to delete this Agent from the current Battle?')) {
      this.actorChange.next(InterComponentInteraction.RemovedActor);
    }
  }


  plusInitiative() {
    const value = prompt('Please write how many Initiative points you want to add', '1');
    if (value != null && this.actor != null) {
      const v: number = parseInt(value, 10);
      this.actor.initiative += v;
      this.actorChange.next(InterComponentInteraction.ActorInitiativeChange);
    }
  }

  minusInitiative() {
    const value = prompt('Please how many Initiative points you want to subtract', '1');
    if (value != null && this.actor != null) {
      const v: number = parseInt(value, 10);
      this.actor.initiative -= v;
      this.actorChange.next(InterComponentInteraction.ActorInitiativeChange);
    }

  }

  setInitiative() {
    const value = prompt('Please to which value you want to set the Initiative of this Agent', '3');
    if (value != null && this.actor != null) {
      const v: number = parseInt(value, 10);
      this.actor.initiative = v;
      this.actorChange.next(InterComponentInteraction.ActorInitiativeChange);
    }
  }

  takeWithering() {
    const value = prompt('Please to how much withering damage was taken', '1');
    if (value != null && this.actor != null) {
      this.actor.takeWitheringDamage(parseInt(value, 10));
      this.actorChange.next(InterComponentInteraction.ActorDamageChange);
    }
  }

  takeDecisive() {
    const value = prompt('Please to how much decisive damage was taken', '1');
    if (value != null && this.actor != null) {
      this.actor.takeDecisiveDamage(parseInt(value, 10));
      this.actorChange.next(InterComponentInteraction.ActorDamageChange);
    }
  }

  healDamage() {
    const value = prompt('Please to how much damage / magnitude loss was healed', '1');
    if (value != null && this.actor != null) {
      this.actor.healDamage(parseInt(value, 10));
      this.actorChange.next(InterComponentInteraction.ActorDamageChange);
    }
  }

  addCondition() {
    const txt = prompt('Add a new condition / note to ' + this.actor.underlyingTemplate.title);
    if (txt != null && txt.trim().length > 0) {
      this.actor.conditions.push(new CustomCondition(txt.trim()));
      this.actorChange.next(InterComponentInteraction.CustomConditionChange);
    }
  }

  removeCondition(index: number) {
    if (confirm('Do you really want to delete: ' + this.actor.conditions[index].title + ' ?')) {
      this.actor.conditions.splice(index, 1);
      this.actorChange.next(InterComponentInteraction.CustomConditionChange);
    }
  }

}
