import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .whiteText {
    color: white;
  }`]
})
export class AppComponent {
  title = 'app';
  display = false;
  clicks = 0;

  onClick() {
    this.display ? this.display = false : this.display = true;
    this.clicks++;
  }

  getColor() {
    return this.clicks >= 5? 'blue' : 'white';
  }
}
