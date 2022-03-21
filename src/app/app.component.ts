import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  showOrHide: boolean = true;

  onClick() {
    this.showOrHide = !this.showOrHide;
  }
}
