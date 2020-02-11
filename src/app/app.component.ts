import { Component } from '@angular/core';
import {RecordsService} from './records.service';

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

  users = [];
  recordService: RecordsService;

  constructor(private recordsService: RecordsService) {
    this.simpleMethod();
    this.users = recordsService.getData();
    this.recordService = recordsService;
  }

  @log
  simpleMethod() {
    console.log('hi there');
  }

  addData() {
    this.recordsService.addRecord({name : 'Naveen', age: '22'});
  }
}
