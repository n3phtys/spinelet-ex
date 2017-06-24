import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TemplateLibraryService } from 'app/template-library.service';

@Component({
  selector: 'app-template-library',
  templateUrl: './template-library.component.html',
  styleUrls: ['./template-library.component.css']
})
export class TemplateLibraryComponent implements OnInit {


  // either the id related to the Template Library, or -1 as a null guard
  @Output() addedActor = new EventEmitter<number>();

  constructor(private templateLibraryService: TemplateLibraryService) { }

  ngOnInit() {
  }

}
