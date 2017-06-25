import { Component, OnInit } from '@angular/core';
import { BattleCenterService } from 'app/battle-center.service';
import { InterComponentInteraction } from 'app/inter-component-interaction.enum';
import { Template } from "app/template";

@Component({
  selector: 'app-battle-center',
  templateUrl: './battle-center.component.html',
  styleUrls: ['./battle-center.component.css']
})
export class BattleCenterComponent implements OnInit {

  battleChange: InterComponentInteraction = null;


  constructor(private battleCenterService: BattleCenterService) { }

  ngOnInit() {
  }

  actorChangeEvent(actorIndex: number, event: InterComponentInteraction) {
    // TODO
  }


  templateLibraryChangeEvent(template: Template) {
    // TODO
  }
}
