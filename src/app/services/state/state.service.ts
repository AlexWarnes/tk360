import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }


  private displayType: BehaviorSubject<"MOBILE" | "DESKTOP"> = new BehaviorSubject(undefined);
  public displayType$: Observable<"MOBILE" | "DESKTOP"> = this.displayType.asObservable().pipe(
    filter(display => !!display)
  );

  public updateDisplayType(displayType): void {
    this.displayType.next(displayType)
  }

  private sidenavIsOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public sidenavIsOpen$: Observable<boolean> = this.sidenavIsOpen.asObservable();

  public toggleSidenav(status: boolean = !this.sidenavIsOpen.value) {
    this.sidenavIsOpen.next(status);
  }
}
