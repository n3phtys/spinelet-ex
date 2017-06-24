import { Component, OnInit } from '@angular/core';
import { BattleCenterService } from 'app/battle-center.service';

@Component({
  selector: 'app-battle-center',
  templateUrl: './battle-center.component.html',
  styleUrls: ['./battle-center.component.css']
})
export class BattleCenterComponent implements OnInit {

  constructor(private battleCenterService: BattleCenterService) { }

  ngOnInit() {
  }

}
