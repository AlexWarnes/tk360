import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  title: string = 'Contact';
  description: string = "Let's talk."
  imgURL: string = "https://images.unsplash.com/photo-1493606278519-11aa9f86e40a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  headerHeight: string = "360px"
  constructor(
    private FORM_BUILD: FormBuilder
  ) { }

  ContactFG: FormGroup;

  ngOnInit(): void {
    this.ContactFG = this.FORM_BUILD.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
      message: ['', [Validators.required]]
    })
  }

}
