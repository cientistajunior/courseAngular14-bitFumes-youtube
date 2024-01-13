import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        name: 'Clean Code',
        author: 'Robert C Martin',
        image: 'https://m.media-amazon.com/images/I/51E2055ZGUL._SL1000_.jpg',
        amount: 700.0,
      },
      {
        name: 'Programatic Programmer',
        author: 'David Thomas',
        image: 'https://m.media-amazon.com/images/I/71f743sOPoL._SL1500_.jpg',
        amount: 800.0,
      },
      {
        name: 'Art Of Computer Programming',
        author: 'Donald Jhon Fuller',
        image: 'https://m.media-amazon.com/images/I/719SYGJejmL._SY425_.jpg',
        amount: 18300,
      },
      {
        name: 'Introdution To Algorithms',
        author: 'T Cormen',
        image:
          'https://m.media-amazon.com/images/I/41SNoh5ZhOL._SX342_SY445_.jpg',
        amount: 1500,
      },
    ];
  }
}
