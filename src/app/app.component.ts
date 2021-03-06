import { Component } from '@angular/core';

function log(target, name, descriptor) {
  console.log(target);
  console.log(name);
  console.log(descriptor);
  descriptor.value();
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro2angular';

  constructor() {
    this.simpleMethod();
  }

  @log
  simpleMethod() {
    console.log('hi there');
  }

}
