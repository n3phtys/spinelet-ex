/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BattleLibraryService } from 'app/battle-library.service';
import { AgentCreatorComponent } from 'app/agent-creator/agent-creator.component';
import { SelectorAgentsComponent } from 'app/selector-agents/selector-agents.component';
import { AgentLibraryService } from 'app/agent-library.service';
import { FormsModule } from '@angular/forms';
import { EnumPipePipe } from 'app/enum-pipe.pipe';
import { WoundpenaltyPipe } from 'app/woundpenalty.pipe';


import { AgentVisualizeComponent } from './agent-visualize.component';

describe('AgentVisualizeComponent', () => {
  let component: AgentVisualizeComponent;
  let fixture: ComponentFixture<AgentVisualizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
    AgentVisualizeComponent,
    SelectorAgentsComponent,
    AgentCreatorComponent,
    EnumPipePipe,
    WoundpenaltyPipe
      ],
    providers: [
    BattleLibraryService,
    AgentLibraryService
    ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentVisualizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
