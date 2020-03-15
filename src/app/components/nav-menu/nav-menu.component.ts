import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  constructor(
    private STATE: StateService
  ) { }

  ngOnInit(): void {
  }

  handleMenuClick() {
    this.STATE.toggleSidenav();
  }

}
