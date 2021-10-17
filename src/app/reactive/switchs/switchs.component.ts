import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switchs',
  templateUrl: './switchs.component.html',
  styles: [],
})
export class SwitchsComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    genre: ['M', Validators.required],
    notifications: [true, Validators.required],
    terms: [false, Validators.requiredTrue],
  });

  person = {
    genre: 'F',
    notifications: true,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset({ ...this.person, terms: false });

    /*
    this.myForm.get('terms')?.valueChanges.subscribe((newValue) => {
      console.log(newValue);
    });
    */

    this.myForm.valueChanges.subscribe(({terms, ...rest}) => {
      //delete form.terms;
      this.person = rest;
    });
  }

  save() {
    if (this.myForm.invalid) {
      return;
    }
    console.log(this.myForm.value);
  }
}
