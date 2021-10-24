import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  public nameValidatePattern: string = '^([a-zA-Z]+) ([a-zA-Z]+)*';
  public mailValidatePattern: string =
    '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  validatePerson(ctrl: FormControl): ValidationErrors | null {
    const value = ctrl.value?.trim().toLowerCase();
    if (value === 'jlc') {
      return {
        jlc: true,
      };
    }
    return null;
  }

  validateEqualFields(field1: string, field2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pwd1 = formGroup.get(field1)?.value;
      const pwd2 = formGroup.get(field2)?.value;
      if(pwd1 !== pwd2) {
        formGroup.get(field2)?.setErrors({ fieldNoEquals: true});
        return { fieldsNoEquals: true }
      }
      formGroup.get(field2)?.setErrors(null);
      return null;
    };
  }
}
