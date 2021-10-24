import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  public nameValidatePattern: string = '^([a-zA-Z]+) ([a-zA-Z]+)*';
  public mailValidatePattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  
  constructor() { }

  validatePerson(ctrl: FormControl): ValidationErrors | null {
    const value = ctrl.value?.trim().toLowerCase();
    if(value === 'jlc'){
      return {
        jlc: true
      }
    }
    return null;
}  
}
