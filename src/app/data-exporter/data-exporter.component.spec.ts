import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataExporterComponent } from './data-exporter.component';
import { TemplateLibraryService } from "app/template-library.service";
import { BattleCenterService } from "app/battle-center.service";

describe('DataExporterComponent', () => {
  let component: DataExporterComponent;
  let fixture: ComponentFixture<DataExporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataExporterComponent ],
    providers: [
    TemplateLibraryService,
    BattleCenterService
    ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataExporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
