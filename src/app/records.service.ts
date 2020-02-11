import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }

  records = [
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
    },
    {
      name: 'Vishnu',
      age: '14'
    }
  ];

  addRecord(newRecord) {
    this.records.push(newRecord);
  }

  getData() {
    return this.records;
  }
}
