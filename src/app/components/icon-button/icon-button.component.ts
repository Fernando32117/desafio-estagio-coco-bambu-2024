import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

type TObjectKey = {
  [key: string]: {
    default: string;
    checked: string;
  };
};

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {
  @Output() buttonEvent: EventEmitter<boolean> = new EventEmitter();
  @Input() buttonStatus!: boolean;
  @Input() buttonName!: string;

  src_icon: TObjectKey = {
    favorite: {
      default: 'favorite-black.svg',
      checked: 'favorite-checked.svg'
    },
    saved: {
      default: 'saved-black.svg',
      checked: 'saved-checked.svg'
    },
    finished: {
      default: 'finished-black.svg',
      checked: 'finished-checked.svg'
    }
  };

  constructor() {}

  ngOnInit(): void {}

  onToggle() {
    this.buttonEvent.emit();
  }
}
