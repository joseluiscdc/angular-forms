import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0) ] ],
    stock: [0, [Validators.required, Validators.min(0) ] ],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  isValid(field: string): boolean | null{
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }
}
