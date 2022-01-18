import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';

const routes: Routes = [
  {path:'home', component: AppComponent},
  {path:'contact',  loadChildren: () => import(`./contact/contact.module`).then(m => m.ContactModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
