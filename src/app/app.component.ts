import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'N/A';

  constructor() {
    this.title = 'Spinelet-EX works!';
  }
}
