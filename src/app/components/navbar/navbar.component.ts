import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private STATE: StateService
  ) { }

  displayType$ = this.STATE.displayType$;
  buttons = [
    {
      text: 'Services',
      linkTo: '/services'
    },
    {
      text: 'Portfolio',
      linkTo: '/portfolio'
    },
    {
      text: 'About',
      linkTo: '/about'
    },
    {
      text: 'Contact',
      linkTo: '/contact'
    }
  ]

  ngOnInit(): void {
  }

  handleMenuClick() {
    this.STATE.toggleSidenav();
  }
}
