import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styles: [],
})
export class RegistryComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validations.nameValidatePattern),
      ],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validations.mailValidatePattern),
      ],
      [this.emailValidator],
    ],
    username: ['', [Validators.required, this.validations.validatePerson]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmpw: ['', [Validators.required, Validators.minLength(6)]],
  });

  get emailErrorMsg(): string {
    const errors = this.myForm.get('email')?.errors;
    if (errors?.required) {
      return 'Email es obligatorio';
    } else if (errors?.pattern) {
      return 'Email es invalido';
    } else if (errors?.emailused) {
      return 'Email esta en uso';
    }
    return '';
  }

  get nameErrorMsg(): string {
    const errors = this.myForm.get('name')?.errors;
    if (errors?.required) {
      return 'Name es obligatorio';
    } else if (errors?.pattern) {
      return 'Name es invalido';
    }
    return '';
  }  

  constructor(
    private fb: FormBuilder,
    private validations: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.myForm.validator = this.validations.validateEqualFields(
      'password',
      'confirmpw'
    );

    this.myForm.reset({
      name: 'Jose Luis',
      email: 'joseluis@mail.com',
      username: 'joseluiscdc',
    });
  }

  isValid(field: string) {
    return (
      this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched
    );
  }

  isValidForm() {
    this.myForm.markAllAsTouched();
  }
}
