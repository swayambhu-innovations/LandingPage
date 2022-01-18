import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../contact.model';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder, private cs: ContactService) { }

  ngOnInit(): void {
    this.createContactForm();
  }

  createContactForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      messsage: ['']
    });
  }

  onSubmit() {
    console.log(this.contactForm);
    const data : Contact = {
      name: this.contactForm.controls.name.value,
      email: this.contactForm.controls.email.value,
      age: this.contactForm.controls.age.value,
      phoneNumber: this.contactForm.controls.phoneNumber.value,
      messsage: this.contactForm.controls.messsage.value
    }
    this.cs.saveRequest(data);
  }



}
