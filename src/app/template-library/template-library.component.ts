import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TemplateLibraryService } from 'app/template-library.service';
import { Template } from 'app/template';
import { AgentType } from 'app/agent-type.enum';
import { Drill } from 'app/drill.enum';

@Component({
  selector: 'app-template-library',
  templateUrl: './template-library.component.html',
  styleUrls: ['./template-library.component.css']
})
export class TemplateLibraryComponent {

  public readonly drills = Drill;

  public readonly types = AgentType;


  @Output() addedActor = new EventEmitter<Template>();

  // tslint:disable-next-line:no-inferrable-types
  private selectedIndex: number = -1;
  private selectedTemplate: Template = null;
  private renderImage: string;


  constructor(private templateLibraryService: TemplateLibraryService) {
    this.templateLibraryService.add(new Template('Template A'));
    this.templateLibraryService.add(new Template('Template B'));
    this.templateLibraryService.add(new Template('Template C'));
  }



  save() {
    this.templateLibraryService.commitChanges(this.selectedIndex);
  }

  addToBattle() {
    if (confirm('Do you want to add this template ' + this.selectedTemplate.title +
      ' as an actor to the current battle?')) {
      this.addedActor.next(this.selectedTemplate);
    }
  }

  rerenderImage() {
    if (this.selectedTemplate != null) {
      this.renderImage = 'url(\'' + this.selectedTemplate.avatarUrl + '\')';
    }
  }

  saveAs() {
    const title = prompt('Add a new Template to the Library, enter the templates title:', 'copy of ' + this.selectedTemplate.title);
    if (title != null && title.trim().length > 0)  {
      const newTemplate = this.templateLibraryService.cloneEntity(this.selectedTemplate);
      newTemplate.title = title;
      const index = this.templateLibraryService.add(newTemplate);
      this.switchTo(index);
    }
  }

  revert() {
    this.templateLibraryService.revertChanges(this.selectedIndex);
  }

  addNewTemplate() {
    const title = prompt('Add a new Template to the Library, enter the templates title:');
    if (title != null && title.trim().length > 0)  {
      const newTemplate = new Template(title.trim());
      const index = this.templateLibraryService.add(newTemplate);
      this.switchTo(index);
    }
  }

  delete() {
    if (confirm('Do you really want to delete this template?')) {
      this.templateLibraryService.remove(this.selectedIndex);
      this.close();
    }
  }

  close() {
    this.selectedTemplate = null;
    this.selectedIndex = -1;
  }

  switchTo(templateIndex: number) {
    if (templateIndex < 0 || templateIndex >= this.templateLibraryService.persistentArray.length) {
      this.selectedIndex = -1;
      this.selectedTemplate = null;
    } else {
      this.selectedIndex = templateIndex;
      this.selectedTemplate = this.templateLibraryService.persistentArray[templateIndex];
    }
  }

}
