import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../contact.model';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
})

export class ContactFormComponent implements OnInit {
  contactForm: FormGroup | any;
  isSubmitted = false;
  constructor(private formBuilder: FormBuilder, private cs: ContactService) { }

  ngOnInit(): void {
    this.createContactForm();
  }

  createContactForm() {
    this.contactForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}")]),
      age: new FormControl('', [Validators.max(99), Validators.min(1), Validators.required]),
      phoneNumber: new FormControl('', [Validators.pattern("^[7-9][0-9]{9}$"), Validators.required]),
      messsage: new FormControl()
    });
  }

  onSubmit() {
    const data: Contact = {
      name: this.contactForm.controls.name.value,
      email: this.contactForm.controls.email.value,
      age: this.contactForm.controls.age.value,
      phoneNumber: this.contactForm.controls.phoneNumber.value,
      messsage: this.contactForm.controls.messsage.value
    }
    this.cs.saveResponse(data);
    this.contactForm.reset();
    this.isSubmitted= true;
  }

}
