import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Agent } from 'app/agent';
import { Battle } from 'app/battle';
import { Drill } from 'app/drill.enum';

@Component({
  selector: 'app-agent-visualize',
  templateUrl: './agent-visualize.component.html',
  styleUrls: ['./agent-visualize.component.css']
})
export class AgentVisualizeComponent implements OnInit, OnChanges {

  @Input() agent: Agent = null;
  @Input() index: number;
  @Input() battle: Battle = null;

  public background_color= 'lightblue';

  public Drill = Drill;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Input changed to:');
    console.log(this.agent);

    this.computeBackgroundColor();
  }

  private computeBackgroundColor() {
if (!this.agent.active) {
     this.background_color =  'grey';
    } else if (this.agent.hasActedThisRound) {
this.background_color = 'white';
    } else {
this.background_color =       'lightblue';
    }
  }

  commitAction() {
    this.agent.hasActedThisRound = true;
    this.computeBackgroundColor();
  }

  disableEnable() {
    if (this.agent != null) {
      this.agent.active = !this.agent.active;
    this.computeBackgroundColor();
    }
  }

  remove() {
    if (this.battle != null && this.index != null && this.index >= 0 && this.index < this.battle.actors.length
    && confirm('Do you really want to delete this Agent from the current Battle?')) {
      this.battle.actors.splice(this.index, 1);
    }
  }


  plusInitiative() {
    const value = prompt('Please write how many Initiative points you want to add', '1');
    console.log(this.agent);
    if (value != null && this.agent != null) {
      const v: number = parseInt(value, 10);
    console.log(v);
      this.agent.increaseInitiative(v);
    }
  }

  minusInitiative() {
    const value = prompt('Please how many Initiative points you want to subtract', '1');
    if (value != null && this.agent != null) {
      this.agent.decreaseInitiative(parseInt(value, 10));
    }

  }

  setInitiative() {
    const value = prompt('Please to which value you want to set the Initiative of this Agent', '3');
    if (value != null && this.agent != null) {
      this.agent.setInitiative(parseInt(value, 10));
    }
  }

}
