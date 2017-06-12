import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgentVisualizeComponent } from './agent-visualize/agent-visualize.component';
import { SelectorAgentsComponent } from './selector-agents/selector-agents.component';
import { BattleSelectorComponent } from './battle-selector/battle-selector.component';
import { BattleLibraryService } from 'app/battle-library.service';

@NgModule({
  declarations: [
    AppComponent,
    AgentVisualizeComponent,
    SelectorAgentsComponent,
    BattleSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BattleLibraryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
