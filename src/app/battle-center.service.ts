import { Injectable } from '@angular/core';
import { ExportFillable } from 'app/export-fillable';
import { Export } from 'app/export';
import { Observable } from 'rxjs/Observable';
import { DirtyCheckService } from 'app/dirty-check-service';
import { Battle } from 'app/battle';

@Injectable()
export class BattleCenterService extends DirtyCheckService<Battle> implements ExportFillable  {
  entityFromJson(json: string): Battle {
    throw new Error('Method not implemented.');
  }
  entityArrayFromJson(json: string): Battle[] {
    throw new Error('Method not implemented.');
  }


  import(importContent: Export): void {
    throw new Error('Method not implemented.');
  }
  export(exportContent: Export): Observable<Export> {
    throw new Error('Method not implemented.');
  }


  constructor() {
    super();
  }

}
