import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleVisualizeComponent } from './battle-visualize.component';
import { BattleLibraryService } from 'app/battle-library.service';
import { AgentCreatorComponent } from 'app/agent-creator/agent-creator.component';
import { SelectorAgentsComponent } from 'app/selector-agents/selector-agents.component';
import { AgentVisualizeComponent } from 'app/agent-visualize/agent-visualize.component';
import { AgentLibraryService } from 'app/agent-library.service';
import { FormsModule } from '@angular/forms';
import { EnumPipePipe } from 'app/enum-pipe.pipe';
import { WoundpenaltyPipe } from 'app/woundpenalty.pipe';
import { SortbyinitiativePipe } from 'app/sortbyinitiative.pipe';

describe('BattleVisualizeComponent', () => {
  let component: BattleVisualizeComponent;
  let fixture: ComponentFixture<BattleVisualizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
    AgentVisualizeComponent,
    SelectorAgentsComponent,
    BattleVisualizeComponent,
    AgentCreatorComponent,
    EnumPipePipe,
    WoundpenaltyPipe,
    SortbyinitiativePipe
      ],
    providers: [
    BattleLibraryService,
    AgentLibraryService
    ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleVisualizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
