import { TestBed, inject } from '@angular/core/testing';

import { TemplateLibraryService } from './template-library.service';

describe('TemplateLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemplateLibraryService]
    });
  });

  it('should be created', inject([TemplateLibraryService], (service: TemplateLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
