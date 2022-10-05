import { Book } from './book.js';
import { BueCallback } from './types.js';

export function serialize(value: unknown) {
  if (value === null) {
    return value + '';
  }

  // unknown не даст использовать
  // name, genre и price без проверки
  if (value instanceof Book) {
    return `${value.name}, ${value.genre}, ${value.price}`;
  }

  // остальные типы будем просто
  // приводить к строке
  return value;
}

export function showRating(enitiry: { rating: number }) {
  if (enitiry.rating === null) {
    return 'not rated yet';
  }

  const roundedRating = Math.round(enitiry.rating);
  let rating = '';

  for (let i = 0; i < roundedRating; i++) {
    rating += '⭐';
  }

  return `${rating} ${enitiry.rating.toFixed(2)}`;
}

export function haveNewBook(): boolean {
  // Здесь будет какая-то логика
  return true;
}

export function addToShelf(book: Book, shelfName = 'favorite') {
  // здесь будет логика добавления книги на полку
}

export function markAsRead(...books: Book[]): void {
  console.log(books.length);
  // здесь будет какая-то лоигка
}

export function bueRequest(book: Book): Promise<string> {
  const transactionId = Math.round.toString();
  return Promise.resolve(transactionId);
}



export function buy(book: Book, callback: BueCallback) {
  bueRequest(book)
    .then((id) => {
      callback(null, id);
    })
    .catch((err) => {
      callback(err);
    });
}
