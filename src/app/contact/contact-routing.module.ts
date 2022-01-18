import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactFormComponent } from './contact-form/contact-form.component';

const contactRoutes: Routes = [
    { path: 'contact-form', component: ContactFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(contactRoutes)],
    exports: [RouterModule]
})
export class ContactRoutingModule { }
