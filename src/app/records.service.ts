import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) { }

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
    this.login();
  }

  getData() {
    return this.records;
  }

  login() {

    const credentials = {
      username : 'kuldeep5534@gmail.com',
      secret : 'mangalam'
    }

    this.http.post('http://scholars.tarkshala.com:8080/authentication/login', credentials, {responseType: 'json'}).subscribe(data => {
      console.log(data);
    });
  }
}
