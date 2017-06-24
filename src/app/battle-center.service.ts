import { Injectable } from '@angular/core';
import { ExportFillable } from "app/export-fillable";
import { Export } from "app/export";
import { Observable } from "rxjs/Observable";

@Injectable()
export class BattleCenterService implements ExportFillable {
  import(importContent: Export): void {
    throw new Error("Method not implemented.");
  }
  export(exportContent: Export): Observable<Export> {
    throw new Error("Method not implemented.");
  }


  constructor() { }

}
