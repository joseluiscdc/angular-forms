import { Component, OnInit } from '@angular/core';

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
  styles: [
  ]
})
export class DinamicsComponent implements OnInit {
  newGame: string = '';

  person: Person = {
    name: 'José Luis',
    favorites: [
      { id: 1, name: 'Metal Gear' },
      { id: 2, name: 'Otra wa' },
    ],
  };
  constructor() { }

  ngOnInit(): void {
  }

}
