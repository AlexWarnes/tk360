import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  title: string = 'Portfolio';
  description: string = 'TK360 works with clients in the DC and VA area to make their properties reflect their aspirations for the future.'
  imgURL: string = "https://www.brownstoner.com/wp-content/uploads/2019/02/brooklyn-home-renovations-bolster-09.jpg"
  // imgURL: string = "https://images.unsplash.com/photo-1546198632-9ef6368bef12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"

  constructor() { }

  ngOnInit(): void {
  }

}
