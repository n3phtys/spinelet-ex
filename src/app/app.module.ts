import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgentVisualizeComponent } from './agent-visualize/agent-visualize.component';
import { SelectorAgentsComponent } from './selector-agents/selector-agents.component';
import { BattleSelectorComponent } from './battle-selector/battle-selector.component';
import { BattleLibraryService } from 'app/battle-library.service';
import { BattleVisualizeComponent } from './battle-visualize/battle-visualize.component';
import { AgentCreatorComponent } from './agent-creator/agent-creator.component';
import { AgentLibraryService } from 'app/agent-library.service';
import { EnumPipePipe } from './enum-pipe.pipe';
import { WoundpenaltyPipe } from './woundpenalty.pipe';
import { SortbyinitiativePipe } from './sortbyinitiative.pipe';
import { DataExporterComponent } from './data-exporter/data-exporter.component';
import { ActorVisualizerComponent } from './actor-visualizer/actor-visualizer.component';
import { BattleCenterComponent } from './battle-center/battle-center.component';
import { TemplateLibraryComponent } from './template-library/template-library.component';
import { BattleCenterService } from 'app/battle-center.service';
import { TemplateLibraryService } from 'app/template-library.service';

@NgModule({
  declarations: [
    AppComponent,
    AgentVisualizeComponent,
    SelectorAgentsComponent,
    BattleSelectorComponent,
    BattleVisualizeComponent,
    AgentCreatorComponent,
    EnumPipePipe,
    WoundpenaltyPipe,
    SortbyinitiativePipe,
    DataExporterComponent,
    ActorVisualizerComponent,
    BattleCenterComponent,
    TemplateLibraryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BattleLibraryService,
    AgentLibraryService,
    TemplateLibraryService,
    BattleCenterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
