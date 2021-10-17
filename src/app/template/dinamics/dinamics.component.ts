import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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
export class DinamicsComponent {
  @ViewChild('myForm') myForm!: NgForm;
  newGame: string = '';

  person: Person = {
    name: 'José Luis',
    favorites: [
      { id: 1, name: 'Metal Gear' },
      { id: 2, name: 'Otra wa' },
    ],
  };

  save(): void {
    console.log('Holi Joshe');
  }

  delete(index: number) {
    this.person.favorites.splice(index, 1);
  }

  add() {
    const newFavorite: Favorite = {
      id: this.person.favorites.length+1, name: this.newGame
    }

    this.person.favorites.push({...newFavorite});
    this.newGame = '';
  }
}
