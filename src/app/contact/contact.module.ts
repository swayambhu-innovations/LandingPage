import "@angular/compiler";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactService } from './services/contact.service';

import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    ContactFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ContactRoutingModule, 
  ],
  providers: [ContactService]
})
export class ContactModule { }
