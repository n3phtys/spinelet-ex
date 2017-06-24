import { Component, OnInit } from '@angular/core';
import { BattleCenterService } from "app/battle-center.service";
import { TemplateLibraryService } from "app/template-library.service";
import { Export } from "app/export";

@Component({
  selector: 'app-data-exporter',
  templateUrl: './data-exporter.component.html',
  styleUrls: ['./data-exporter.component.css']
})
export class DataExporterComponent implements OnInit {

  constructor(private templateLibraryService: TemplateLibraryService,
    private battleCenterService: BattleCenterService) { }

  ngOnInit() {
  }



  setOutputCSVLink(filename: string, filecontent: string) {
    this.setFilename(filename);
    this.setFilecontent(filecontent);
    this.makeDownloadLinkHidden(false);
  }

  makeDownloadLinkHidden(yes: boolean) {
if (document.readyState === 'complete') {
      if (document.getElementById('exportLinkAnchor')) {
        if (yes) {
          document.getElementById('exportLinkAnchor')
          .setAttribute('hidden', 'true');
        } else {
          document.getElementById('exportLinkAnchor')
          .removeAttribute('hidden');
        }
      }
    } else {
      window.onload = () => {
        if (yes) {
          document.getElementById('exportLinkAnchor')
          .setAttribute('hidden', 'true');
        } else {
          document.getElementById('exportLinkAnchor')
          .removeAttribute('hidden');
        }
      };
    }
  }

  setFilename(filename: string) {
if (document.readyState === 'complete') {
      if (document.getElementById('exportLinkAnchor')) {
      document.getElementById('exportLinkAnchor')
        .setAttribute('download', filename);
      }
    } else {

      window.onload = () => {
        document.getElementById('exportLinkAnchor')
          .setAttribute('download', filename);
      };
    }
  }

  setFilecontent(filecontent: string) {
if (document.readyState === 'complete') {
      if (document.getElementById('exportLinkAnchor')) {
      document.getElementById('exportLinkAnchor')
        .setAttribute('href', 'data:text/plain;base64,' + btoa(filecontent));
      }
    } else {

      window.onload = () => {
        document.getElementById('exportLinkAnchor')
          .setAttribute('href', 'data:text/plain;base64,' + btoa(filecontent));
      };
    }
  }


  makeExportLink() {
      this.makeDownloadLinkHidden(true);
      this.templateLibraryService.export( new Export([], [], 0))
        .flatMap(exp1 => this.battleCenterService.export(exp1)).subscribe(exp2 => {
        const filename: string = 'export' + new Date().toISOString() + '.json';
        const filecontent: string = JSON.stringify(exp2);
        this.setOutputCSVLink(filename, filecontent);
      });
  }

  importFileChangeEvent(fileInput: any): void {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      const servAgents = this.templateLibraryService;
      const servBattles = this.battleCenterService;
      reader.onload = function (e: any) {
        // a wild file content appears!
        console.log(reader.result);
        const imp = Export.fromJson(reader.result);
        servBattles.import(imp);
        servAgents.import(imp);
      };
      // start file reading process and load content
      reader.readAsText(fileInput.target.files[0]);
    }
  }

}
