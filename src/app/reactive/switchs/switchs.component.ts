import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-switchs',
  templateUrl: './switchs.component.html',
  styles: [
  ]
})
export class SwitchsComponent implements OnInit {
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
