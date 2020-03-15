import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  title: string = 'Full-Service Contractor'
  description: string = 'No project is too small or big, and we even offer emergency service. We are licensed and insured and offer a wide range of services.'
  // imgURL: string = "https://images.unsplash.com/flagged/photo-1556438757-f9181aa300ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
  imgURL: string = "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
  constructor() { }

  ngOnInit(): void {
  }

}
