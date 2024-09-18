import { Injectable } from '@angular/core';
import { IResponseAPI } from 'src/types/types';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  constructor() {}

  async fetchBook(book: string): Promise<Array<IResponseAPI>> {
    const result_api = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${book}`
    );
    const data_JSON = await result_api.json();
    return data_JSON.items ? (data_JSON.items as Array<IResponseAPI>) : [];
  }
}
