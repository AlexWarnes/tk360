import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() iconPath: string;

  constructor() { }

  ngOnInit(): void {
  }

}
