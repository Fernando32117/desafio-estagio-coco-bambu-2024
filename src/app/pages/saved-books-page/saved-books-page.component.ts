import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { IResponseAPI } from 'src/types/types';

@Component({
  selector: 'app-saved-books-page',
  templateUrl: './saved-books-page.component.html',
  styleUrls: ['./saved-books-page.component.css']
})
export class SavedBooksPageComponent implements OnInit {
  bookResult!: Array<IResponseAPI>;
  loader_status = false;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.onFetchData();
  }

  onUpdateLoaderStatus(status: boolean) {
    this.loader_status = status;
  }

  onFetchData() {
    this.loader_status = true;
    const result = this.crudService.getBooks('saved');
    this.bookResult = result;
    this.loader_status = false;
  }
}
