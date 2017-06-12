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

@NgModule({
  declarations: [
    AppComponent,
    AgentVisualizeComponent,
    SelectorAgentsComponent,
    BattleSelectorComponent,
    BattleVisualizeComponent,
    AgentCreatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BattleLibraryService,
    AgentLibraryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
