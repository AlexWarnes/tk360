import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = 'TK360';
  description: string = 'Complete design and remodel construction services.'
  imgURL: string = "https://images.unsplash.com/photo-1481026469463-66327c86e544?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=824&q=80"

  serviceCards$ = this.STATE.serviceCards$;
  constructor(private STATE: StateService) { }

  ngOnInit(): void {
  }

}
