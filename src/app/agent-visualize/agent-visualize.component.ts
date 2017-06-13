import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Agent } from 'app/agent';

@Component({
  selector: 'app-agent-visualize',
  templateUrl: './agent-visualize.component.html',
  styleUrls: ['./agent-visualize.component.css']
})
export class AgentVisualizeComponent implements OnInit, OnChanges {

  @Input() agent: Agent = null;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Input changed to:');
    console.log(this.agent);
  }
}
