import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    name: ['Product Test'],
    price: [15320],
    stock: [121],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
