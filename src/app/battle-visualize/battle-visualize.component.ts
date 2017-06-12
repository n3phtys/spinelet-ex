import { Component, OnInit } from '@angular/core';
import { BattleLibraryService } from 'app/battle-library.service';

@Component({
  selector: 'app-battle-visualize',
  templateUrl: './battle-visualize.component.html',
  styleUrls: ['./battle-visualize.component.css']
})
export class BattleVisualizeComponent implements OnInit {

  constructor(public battleLibraryService: BattleLibraryService) { }

  ngOnInit() {
  }

}
