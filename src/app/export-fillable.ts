import { Export } from 'app/export';
import { Observable } from 'rxjs/Observable';

export interface ExportFillable {

    import(importContent: Export): void;

    export(exportContent: Export): Observable<Export>;

}
