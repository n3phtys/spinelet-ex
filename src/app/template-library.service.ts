import { Injectable } from '@angular/core';
import { ExportFillable } from 'app/export-fillable';
import { Export } from 'app/export';
import { Observable } from 'rxjs/Observable';
import { DirtyCheckService } from 'app/dirty-check-service';
import { Template } from 'app/template';

@Injectable()
export class TemplateLibraryService extends DirtyCheckService<Template>  implements ExportFillable {
  entityFromJson(json: string): Template {
    const t = JSON.parse(json) as Template;
    Object.setPrototypeOf(t, Template.prototype);
    return t;
  }
  entityArrayFromJson(json: string): Template[] {
    const t = JSON.parse(json) as Template[];
    for (const x of t) {
      Object.setPrototypeOf(x, Template.prototype);
    }
    return t;
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
