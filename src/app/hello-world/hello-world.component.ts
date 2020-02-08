import {AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit, OnDestroy, AfterViewInit, AfterContentChecked, AfterContentInit {

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }

}
