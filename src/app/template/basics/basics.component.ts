import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent implements OnInit {
  @ViewChild('myForm') myForm!: NgForm;

  constructor() {}

  ngOnInit(): void {}

  isNameValid(): boolean {
    return (
      this.myForm?.controls.product?.invalid &&
      this.myForm?.controls.product.touched
    );
  }

  isPriceValid(): boolean {
    return (
      this.myForm?.controls.price?.value < 0 &&
      this.myForm?.controls.price.touched
    );
  }

  save(): void {
    console.log('Holi Joshe', this.myForm.value);
  }
}
