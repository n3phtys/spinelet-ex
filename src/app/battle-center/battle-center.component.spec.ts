import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleCenterComponent } from './battle-center.component';
import { BattleCenterService } from "app/battle-center.service";

describe('BattleCenterComponent', () => {
  let component: BattleCenterComponent;
  let fixture: ComponentFixture<BattleCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleCenterComponent ],
    providers: [
    BattleCenterService
    ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
