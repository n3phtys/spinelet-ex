import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateLibraryComponent } from './template-library.component';
import { TemplateLibraryService } from 'app/template-library.service';
import { FormsModule } from '@angular/forms';
import { EnumPipePipe } from 'app/enum-pipe.pipe';

describe('TemplateLibraryComponent', () => {
  let component: TemplateLibraryComponent;
  let fixture: ComponentFixture<TemplateLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ TemplateLibraryComponent,
    EnumPipePipe, ],
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
