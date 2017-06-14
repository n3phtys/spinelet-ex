import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleSelectorComponent } from './battle-selector.component';
import { BattleLibraryService } from 'app/battle-library.service';
import { AgentLibraryService } from "app/agent-library.service";

describe('BattleSelectorComponent', () => {
  let component: BattleSelectorComponent;
  let fixture: ComponentFixture<BattleSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleSelectorComponent ],
    providers: [
      BattleLibraryService,
    AgentLibraryService
    ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
