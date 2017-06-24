import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateLibraryComponent } from './template-library.component';
import { TemplateLibraryService } from "app/template-library.service";

describe('TemplateLibraryComponent', () => {
  let component: TemplateLibraryComponent;
  let fixture: ComponentFixture<TemplateLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateLibraryComponent ],
    providers: [
    TemplateLibraryService
    ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
