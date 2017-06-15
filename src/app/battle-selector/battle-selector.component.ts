import { Component, OnInit } from '@angular/core';
import { BattleLibraryService } from 'app/battle-library.service';
import { Export } from 'app/export';
import { AgentLibraryService } from 'app/agent-library.service';

@Component({
  selector: 'app-battle-selector',
  templateUrl: './battle-selector.component.html',
  styleUrls: ['./battle-selector.component.css']
})
export class BattleSelectorComponent implements OnInit {

  constructor(public battleLibraryService: BattleLibraryService,
    public agentLibraryService: AgentLibraryService) {

  }

  ngOnInit() {
  }


  delete(idx: number) {
    if (confirm('Do you really want to delete ' + this.battleLibraryService.getBattles()[idx].title + ' permanently?')) {
      this.battleLibraryService.deleteBattleAndSelectNextOne(idx);
    }
  }

  addBattle() {
    console.log('pressed addBattle');
    this.battleLibraryService.createNewBattleAndPrepend();
  }

  select(idx: number) {
    console.log('pressed select: ' + idx);
    this.battleLibraryService.openIndex(idx);
  }






  setOutputCSVLink(filename: string, filecontent: string) {
    if (document.readyState === 'complete') {
      if (document.getElementById('exportLinkAnchor')) {
      document.getElementById('exportLinkAnchor')
        .setAttribute('href', 'data:text/plain;base64,' + btoa(filecontent));
      document.getElementById('exportLinkAnchor')
        .setAttribute('download', filename);
        document.getElementById('exportLinkAnchor')
        .removeAttribute('hidden');
      }
    } else {

      window.onload = () => {
        document.getElementById('exportLinkAnchor')
          .setAttribute('href', 'data:text/plain;base64,' + btoa(filecontent));

        document.getElementById('exportLinkAnchor')
          .setAttribute('download', filename);
        document.getElementById('exportLinkAnchor')
        .removeAttribute('hidden');
      };
    }
  }



  makeExportLink() {
      const exp = new Export(this.agentLibraryService.agentsInLibrary,
      this.battleLibraryService.getBattles(), this.battleLibraryService.getIndex());
      const filename: string = 'export' + new Date().toISOString() + '.json';
      const filecontent: string = JSON.stringify(exp);
      this.setOutputCSVLink(filename, filecontent);
  }

  importFileChangeEvent(fileInput: any): void {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      const servAgents = this.agentLibraryService;
      const servBattles = this.battleLibraryService;
      reader.onload = function (e: any) {
        // a wild file content appears!
        console.log(reader.result);
        const imp = Export.fromJson(reader.result);
        servBattles.import(imp.battles, imp.index);
        servAgents.import(imp.templates);
      };
      // start file reading process and load content
      reader.readAsText(fileInput.target.files[0]);
    }
  }

}
