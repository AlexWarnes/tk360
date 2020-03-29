import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
  @Input() title: string;
  @Input() rating: number;
  @Input() text: string;
  constructor() { }

  ngOnInit(): void {

  }

}
