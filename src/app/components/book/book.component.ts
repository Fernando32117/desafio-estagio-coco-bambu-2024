import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { IResponseAPI, BookVolumeInfo } from 'src/types/types';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Output() updateCurrentView: EventEmitter<boolean> = new EventEmitter();
  @Input() bookResponse!: IResponseAPI;

  volumeBookData!: BookVolumeInfo;

  btns_status = {
    favorite: false,
    saved: false,
    finished: false
  };

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.volumeBookData = this.bookResponse.volumeInfo;
    this.applyFilter();
  }

  toggleFavoriteBook() {
    this.btns_status.favorite = !this.btns_status.favorite;
    this.updateFavoriteBooks();
  }

  toggleFinishedBook() {
    this.btns_status.finished = !this.btns_status.finished;
    this.updateFinishedBooks();
  }

  toggleSavedBook() {
    this.btns_status.saved = !this.btns_status.saved;
    this.updateSavedBooks();
  }

  // Services from CRUD
  updateFavoriteBooks() {
    this.btns_status.favorite
      ? this.crudService.setFavorite({
          id: this.bookResponse.id,
          volumeInfo: this.bookResponse.volumeInfo
        })
      : this.crudService.deleteBook(this.bookResponse.id, 'favorite');
    this.updateCurrentView.emit();
  }

  updateFinishedBooks() {
    this.btns_status.finished
      ? this.crudService.setFinished({
          id: this.bookResponse.id,
          volumeInfo: this.bookResponse.volumeInfo
        })
      : this.crudService.deleteBook(this.bookResponse.id, 'finished');
    this.updateCurrentView.emit();
  }

  updateSavedBooks() {
    this.btns_status.saved
      ? this.crudService.setSaved({
          id: this.bookResponse.id,
          volumeInfo: this.bookResponse.volumeInfo
        })
      : this.crudService.deleteBook(this.bookResponse.id, 'saved');
    this.updateCurrentView.emit();
  }

  applyFilter() {
    const favorites = this.crudService.getBooks('favorite');
    const saved = this.crudService.getBooks('saved');
    const finished = this.crudService.getBooks('finished');

    const isFavorite = favorites.some(
      (listBooks: IResponseAPI) => listBooks.id === this.bookResponse.id
    );
    const isSaved = saved.some(
      (listBooks: IResponseAPI) => listBooks.id === this.bookResponse.id
    );
    const isFinished = finished.some(
      (listBooks: IResponseAPI) => listBooks.id === this.bookResponse.id
    );

    this.btns_status.favorite = isFavorite;
    this.btns_status.saved = isSaved;
    this.btns_status.finished = isFinished;
  }
}
