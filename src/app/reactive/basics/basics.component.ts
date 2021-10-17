import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    name: new FormControl('Product Test'),
    price: new FormControl('1520'),
    stock: new FormControl('124'),
  });

  constructor() {}

  ngOnInit(): void {}
}
