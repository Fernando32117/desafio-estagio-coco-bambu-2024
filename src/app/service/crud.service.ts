import { Injectable } from '@angular/core';
import { IResponseAPI } from 'src/types/types';

type OBJ = {
  favorite: Array<IResponseAPI>;
  saved: Array<IResponseAPI>;
  finished: Array<IResponseAPI>;
};

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor() {
    const storage = localStorage.getItem('books') || '';

    if (storage == '') {
      localStorage.setItem(
        'books',
        JSON.stringify({ favorite: [], saved: [], finished: [] })
      );
    }
  }

  checkDuplicatedBook(book: IResponseAPI, response: Array<IResponseAPI>) {
    return response.some((bookResponse) => bookResponse.id == book.id);
  }

  getJSON() {
    const storage = localStorage.getItem('books') || '';
    return JSON.parse(storage) as OBJ;
  }

  setFavorite(book: IResponseAPI) {
    const obj = this.getJSON();
    const status_duplicates = this.checkDuplicatedBook(book, obj.favorite);

    if (!status_duplicates) {
      obj.favorite = [...obj.favorite, book];
      localStorage.setItem('books', JSON.stringify(obj));
    }
  }

  setFinished(book: IResponseAPI) {
    const obj = this.getJSON();
    const status_duplicates = this.checkDuplicatedBook(book, obj.finished);

    if (!status_duplicates) {
      obj.finished = [...obj.finished, book];
      localStorage.setItem('books', JSON.stringify(obj));
    }
  }

  setSaved(book: IResponseAPI) {
    const obj = this.getJSON();
    const status_duplicates = this.checkDuplicatedBook(book, obj.saved);

    if (!status_duplicates) {
      obj.saved = [...obj.saved, book];
      localStorage.setItem('books', JSON.stringify(obj));
    }
  }

  getBooks(filter: string) {
    const storage = this.getJSON();

    switch (filter) {
      case 'favorite':
        return storage.favorite;
      case 'finished':
        return storage.finished;
      case 'saved':
        return storage.saved;
      default:
        return [];
    }
  }

  deleteBook(id: number, filter: string) {
    const storage = this.getJSON();

    if (filter == 'favorite') {
      const updated_storage = storage.favorite.filter(
        (bookStorage: IResponseAPI) => bookStorage.id !== id
      );
      storage.favorite = updated_storage;
      localStorage.setItem('books', JSON.stringify(storage));
      return;
    }

    if (filter == 'finished') {
      const updated_storage = storage.finished.filter(
        (bookStorage: IResponseAPI) => bookStorage.id !== id
      );
      storage.finished = updated_storage;
      localStorage.setItem('books', JSON.stringify(storage));
      return;
    }

    if (filter == 'saved') {
      const updated_storage = storage.saved.filter(
        (bookStorage: IResponseAPI) => bookStorage.id !== id
      );
      storage.saved = updated_storage;
      localStorage.setItem('books', JSON.stringify(storage));
      return;
    }
  }
}
