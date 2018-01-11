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
  clicks = [];

  onClick() {
    this.display ? this.display = false : this.display = true;
    this.clicks.push(this.clicks.length);
  }

  getColor(click: number) {
    return click >= 5? 'blue' : 'white';
  }
}
