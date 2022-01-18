import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { Contact } from '../contact.model';


@Injectable()
export class ContactService {
  url = '';

  constructor( public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private http: HttpClient, 
    private route: Router) { }

  saveRequest(data: Contact){
    this.http.post<Contact>(this.url, data).subscribe();
  }
}
