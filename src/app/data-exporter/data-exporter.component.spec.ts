import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataExporterComponent } from './data-exporter.component';

describe('DataExporterComponent', () => {
  let component: DataExporterComponent;
  let fixture: ComponentFixture<DataExporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataExporterComponent ]
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
