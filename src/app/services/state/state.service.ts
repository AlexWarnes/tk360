import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ServiceCard } from '../../models/ServiceCard.model';
@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  // ========== DATA STORES ==========

  private displayType_: BehaviorSubject<"MOBILE" | "DESKTOP"> = new BehaviorSubject(undefined);
  public displayType$: Observable<"MOBILE" | "DESKTOP"> = this.displayType_.asObservable().pipe(
    filter(display => !!display)
  );

  private sidenavIsOpen_: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public sidenavIsOpen$: Observable<boolean> = this.sidenavIsOpen_.asObservable();

  private serviceCards_: BehaviorSubject<ServiceCard[]> = new BehaviorSubject([
    {
      title: 'Home Remodeling',
      description: 'Is your home layout no longer working for you? We are experts in home remodeling and renovation.',
      iconPath: undefined
    }, {
      title: 'HVAC',
      description: 'Calling us before your AC quits working all together can save you thousands in repairs. We service and repair all major brands.',
      iconPath: 'x'
    }, {
      title: 'Electrical',
      description: 'Full electric service that performs everything from new installation, to troubleshooting and repair for industrial, commercial & residential customers.',
      iconPath: undefined
    }, {
      title: 'Flooring',
      description: 'From premium laminate to new hardwood floor installations. We can also bring your existing hardwood floors back to life.',
      iconPath: undefined
    }, {
      title: 'Smart Home and Office',
      description: 'Connect with devices and appliances in your home or office for added savings, security, and convenience.',
      iconPath: undefined
    }, {
      title: 'Vanilla Box',
      description: 'A clean slate for commercial property before your next tenant.',
      iconPath: undefined
    }
  ]);
  public serviceCards$: Observable<ServiceCard[]> = this.serviceCards_.asObservable();

  // ========== DATA ACCESS METHODS ==========

  public updateDisplayType(displayType): void {
    this.displayType_.next(displayType)
  }

  public toggleSidenav(status: boolean = !this.sidenavIsOpen_.value) {
    this.sidenavIsOpen_.next(status);
  }
}
