import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild
} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
  styleUrls: ['./float-menu.component.css'],
  animations: [
    trigger('openMenu', [
      transition(':enter, :leave', [
        query('@*', animateChild()),
        animate('200ms ease-in-out')
      ])
    ]),

    trigger('easeInOut', [
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate(
          '500ms ease',
          style({
            opacity: 1
          })
        )
      ]),
      transition('* => void', [
        style({
          opacity: 1
        }),
        animate(
          '400ms ease-out',
          style({
            opacity: 0
          })
        )
      ])
    ]),

    trigger('openClose', [
      state('open', style({ transform: 'rotate(0deg)' })),
      state('close', style({ transform: 'rotate(180deg)' })),
      transition('open <=> close', animate('300ms ease-out'))
    ])
  ]
})
export class FloatMenuComponent implements OnInit {
  toggleMenu = false;
  isBaseURL!: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isBaseURL = this.router.url === '/';
  }

  onToggleMenu() {
    this.toggleMenu = !this.toggleMenu;
  }
}
