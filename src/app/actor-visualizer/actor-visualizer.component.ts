import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Actor } from 'app/actor';
import {InterComponentInteraction} from 'app/inter-component-interaction.enum'

@Component({
  selector: 'app-actor-visualizer',
  templateUrl: './actor-visualizer.component.html',
  styleUrls: ['./actor-visualizer.component.css']
})
export class ActorVisualizerComponent implements OnInit {

  @Input() actor: Actor = null;

  @Input() battleChange: InterComponentInteraction = null;

  @Output() actorChange = new EventEmitter<InterComponentInteraction>();

  constructor() { }

  ngOnInit() {
  }

}
