import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleVisualizeComponent } from './battle-visualize.component';
import { BattleLibraryService } from 'app/battle-library.service';
import { AgentCreatorComponent } from 'app/agent-creator/agent-creator.component';
import { SelectorAgentsComponent } from 'app/selector-agents/selector-agents.component';
import { AgentVisualizeComponent } from 'app/agent-visualize/agent-visualize.component';
import { AgentLibraryService } from 'app/agent-library.service';
import { FormsModule } from '@angular/forms';

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
    fixture = TestBed.createComponent(BattleVisualizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
