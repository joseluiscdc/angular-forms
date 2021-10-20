import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styles: [],
})
export class RegistryComponent implements OnInit {
  nameValidatePattern: string = '^([a-zA-Z]+) ([a-zA-Z]+)*';
  mailValidatePattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  myForm: FormGroup = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.pattern(this.nameValidatePattern)],
    ],
    email: ['', [Validators.required, Validators.pattern(this.mailValidatePattern)]],
    username: ['', [Validators.required, this.validatePerson]]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset(
      {
        name: 'Jose Luis',
        email: 'joseluis@mail.com',
        username: 'joseluiscdc'
      }
    )
  }

  isValid(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

  isValidForm(){
    this.myForm.markAllAsTouched();
  }

  validatePerson(ctrl: FormControl){
    const value = ctrl.value?.trim().toLowerCase();
    if(value === 'jlc'){
      return {
        jlc: true
      }
    }
    return null;
  }
}
