import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '../../node_modules/@angular/cdk/layout';
import { StateService } from './services/state/state.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private BREAKPOINT: BreakpointObserver,
    private STATE: StateService
  ) { }
  title = 'TK360';
  displayType$ = this.STATE.displayType$;
  sidenavIsOpen$ = this.STATE.sidenavIsOpen$;

  ngOnInit() {

    // Setup screen displayType observable
    this.BREAKPOINT
      .observe(['(min-width: 640px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('displayType is DESKTOP');
          this.STATE.updateDisplayType('DESKTOP')
        } else {
          console.log('displayType is MOBILE');
          this.STATE.updateDisplayType('MOBILE')
        }
      });

  }

  closeSidenav() {
    this.STATE.toggleSidenav(false);
  }

}
