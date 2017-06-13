/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BattleSelectorComponent } from 'app/battle-selector/battle-selector.component';
import { BattleLibraryService } from 'app/battle-library.service';
import { BattleVisualizeComponent } from 'app/battle-visualize/battle-visualize.component';
import { AgentCreatorComponent } from 'app/agent-creator/agent-creator.component';
import { SelectorAgentsComponent } from 'app/selector-agents/selector-agents.component';
import { AgentVisualizeComponent } from 'app/agent-visualize/agent-visualize.component';
import { AgentLibraryService } from 'app/agent-library.service';
import { FormsModule } from '@angular/forms';
import { EnumPipePipe } from 'app/enum-pipe.pipe';
import { WoundpenaltyPipe } from 'app/woundpenalty.pipe';
import { SortbyinitiativePipe } from "app/sortbyinitiative.pipe";

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent,
    AgentVisualizeComponent,
    SelectorAgentsComponent,
    BattleSelectorComponent,
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
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Spinelet-EX works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Spinelet-EX works!');
  }));

});
