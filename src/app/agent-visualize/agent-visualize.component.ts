import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Agent } from 'app/agent';
import { Battle } from 'app/battle';
import { Drill } from 'app/drill.enum';
import { CustomCondition } from "app/custom-condition";

@Component({
  selector: 'app-agent-visualize',
  templateUrl: './agent-visualize.component.html',
  styleUrls: ['./agent-visualize.component.css']
})
export class AgentVisualizeComponent implements OnInit, OnChanges {

  @Input() agent: Agent = null;
  @Input() index: number;
  @Input() battle: Battle = null;

  @Output() reorder: EventEmitter<Agent> = new EventEmitter<Agent>();


  public Drill = Drill;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.computeBackgroundColor();
  }

  private computeBackgroundColor() {
    this.agent.recomputeBackgroundColor();
  }

  commitAction() {
    this.agent.hasActedThisRound = true;
    this.computeBackgroundColor();
      this.reorder.emit(this.agent);
  }

  disableEnable() {
    if (this.agent != null) {
      this.agent.active = !this.agent.active;
    this.computeBackgroundColor();
      this.reorder.emit(this.agent);
    }
  }

  remove() {
      //TODO: this is nonsense thanks to reorder

    if (this.battle != null && this.index != null && this.index >= 0 && this.index < this.battle.actors.length
    && confirm('Do you really want to delete this Agent from the current Battle?')) {
      this.battle.actors.splice(this.index, 1);
      this.reorder.emit(this.agent);
    }
  }


  plusInitiative() {
    const value = prompt('Please write how many Initiative points you want to add', '1');
    console.log(this.agent);
    if (value != null && this.agent != null) {
      const v: number = parseInt(value, 10);
    console.log(v);
      this.agent.increaseInitiative(v);
      this.reorder.emit(this.agent);
    }
  }

  minusInitiative() {
    const value = prompt('Please how many Initiative points you want to subtract', '1');
    if (value != null && this.agent != null) {
      this.agent.decreaseInitiative(parseInt(value, 10));
      this.reorder.emit(this.agent);
    }

  }

  setInitiative() {
    const value = prompt('Please to which value you want to set the Initiative of this Agent', '3');
    if (value != null && this.agent != null) {
      this.agent.setInitiative(parseInt(value, 10));
      this.reorder.emit(this.agent);
    }
  }

  addCondition() {
    const txt = prompt('Add a new condition / note to ' + this.agent.title);
    if (txt != null && txt.trim().length > 0) {
      this.agent.conditions.push(new CustomCondition(txt.trim()));
      this.reorder.next(this.agent)
    }
  }

  removeCondition(index: number) {
    if (confirm('Do you really want to delete: ' + this.agent.conditions[index].title + ' ?')) {
      console.log('Deleting Index: ' + index);
      console.log(this.agent.conditions.splice(index, 1));
      this.reorder.next(this.agent)
    }
  }

}
