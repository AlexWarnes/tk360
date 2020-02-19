import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-option',
  templateUrl: './nav-option.component.html',
  styleUrls: ['./nav-option.component.scss', '../navbar/navbar.component.scss']
})
export class NavOptionComponent implements OnInit {

  constructor() { }

  @Input() text: string;
  @Input() linkTo: string;

  ngOnInit(): void {
  }

}
