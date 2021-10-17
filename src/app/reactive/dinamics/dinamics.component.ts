import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}
@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [],
})
export class DinamicsComponent implements OnInit {
  newGame: FormControl = this.fb.control('', [Validators.required, Validators.minLength(3)]);

  myForm: FormGroup = this.fb.group({
    name: ['Joshe', [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array(
      [
        ['Metal Gear', [Validators.required, Validators.minLength(3)]],
        ['Otra Wea', [Validators.required, Validators.minLength(3)]],
      ],
      [Validators.required, Validators.minLength(2)]
    ),
  });

  get favoritesArr() {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  isValid(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.controls.value);
  }

  addFavorite() {
    if (this.newGame.invalid) {
      return;
    }
    //this.favoritesArr.push(new FormControl(this.newGame.value, Validators.required));
    this.favoritesArr.push(this.fb.control(this.newGame.value, [Validators.required, Validators.minLength(3)]));
    this.newGame.reset();
  }

  deleteFavorite(index: number){
    this.favoritesArr.removeAt(index);
  }
}
