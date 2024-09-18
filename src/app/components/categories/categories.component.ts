import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  styles: [
    `
      .not-last:after {
        content: ' - ';
        padding: 0 10px;
      }
    `
  ]
})
export class CategoriesComponent implements OnInit {
  @Input() categories!: Array<string>;

  constructor() {}

  ngOnInit(): void {}
}
