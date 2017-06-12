import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleSelectorComponent } from 'app/battle-selector/battle-selector.component';
import { BattleLibraryService } from 'app/battle-library.service';
import { BattleVisualizeComponent } from 'app/battle-visualize/battle-visualize.component';
import { AgentCreatorComponent } from 'app/agent-creator/agent-creator.component';
import { SelectorAgentsComponent } from 'app/selector-agents/selector-agents.component';
import { AgentVisualizeComponent } from 'app/agent-visualize/agent-visualize.component';
import { AgentLibraryService } from 'app/agent-library.service';
import { FormsModule } from '@angular/forms';

describe('AgentCreatorComponent', () => {
  let component: AgentCreatorComponent;
  let fixture: ComponentFixture<AgentCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
    AgentVisualizeComponent,
    SelectorAgentsComponent,
    BattleSelectorComponent,
    BattleVisualizeComponent,
    AgentCreatorComponent
      ],
    providers: [
    BattleLibraryService,
    AgentLibraryService
    ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
