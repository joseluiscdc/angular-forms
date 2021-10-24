import { FormControl } from "@angular/forms";

export const nameValidatePattern: string = '^([a-zA-Z]+) ([a-zA-Z]+)*';
export const mailValidatePattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

export const validatePerson = (ctrl: FormControl) => {
    const value = ctrl.value?.trim().toLowerCase();
    if(value === 'jlc'){
      return {
        jlc: true
      }
    }
    return null;
}