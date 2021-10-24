import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { nameValidatePattern, mailValidatePattern, validatePerson } from 'src/app/shared/validator/validations'; '../../../shared/validator/validations'
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styles: [],
})
export class RegistryComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.pattern(this.validations.nameValidatePattern)],
    ],
    email: ['', [Validators.required, Validators.pattern(this.validations.mailValidatePattern)]],
    username: ['', [Validators.required, this.validations.validatePerson]]
  });

  constructor(private fb: FormBuilder, private validations: ValidatorService) {}

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


}
