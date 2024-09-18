import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FetchService } from 'src/app/service/fetch.service';
import { IResponseAPI } from 'src/types/types';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() updateData: EventEmitter<Array<IResponseAPI>> = new EventEmitter();
  @Output() updateLoader: EventEmitter<boolean> = new EventEmitter();
  @Input() input_book_search!: string;

  toggle_error_message = false;

  constructor(private fetchService: FetchService) {}

  ngOnInit(): void {}

  onScroll() {
    // was not working whwn I click for the first time; had to add a timeout to do this scroll
    setTimeout(() => {
      window.scrollBy({
        top: 600,
        behavior: 'smooth'
      });
    }, 100);
  }

  async search() {
    if (this.input_book_search == undefined || this.input_book_search == '') {
      this.toggle_error_message = true;
      return;
    }

    this.toggle_error_message = false;
    await this.fetch();
    this.onScroll();
  }

  async fetch() {
    this.updateLoader.emit(true);
    const result = await this.fetchService.fetchBook(this.input_book_search);
    this.updateData.emit(result);
    this.updateLoader.emit(false);
  }
}
