import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  @Input() bookDescription!: string;

  toggleReadMore = false;
  shortDescription = '';

  constructor() {}

  ngOnInit(): void {
    this.shortDescription = this.bookDescription
      ?.split(' ')
      .slice(0, 20)
      .join(' ');
  }

  buttonToogleReadMore() {
    this.toggleReadMore = !this.toggleReadMore;
  }
}
