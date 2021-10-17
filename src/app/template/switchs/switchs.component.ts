import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchs',
  templateUrl: './switchs.component.html',
  styles: [],
})
export class SwitchsComponent implements OnInit {
  person = {
    genre: 'F',
    notification: true
  };

  termCond: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
