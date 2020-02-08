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

  users = [
    {
      name : 'Kuldeep Yadav',
      age : '29'
    },
    {
      name: 'Maurya',
      age: '28'
    },
    {
      name: 'Raushan',
      age: '22'
    }
  ];

  constructor() {
    this.simpleMethod();
  }

  @log
  simpleMethod() {
    console.log('hi there');
  }

}
