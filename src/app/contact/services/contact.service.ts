import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Contact } from '../contact.model';

@Injectable()
export class ContactService {

  constructor(private angularFirestore: AngularFirestore) { }

  saveResponse(data: Contact) {
    return new Promise<any>((reject) => {
      this.angularFirestore
        .collection("contactRequests")
        .add(data)
        .then(response => { }, error => reject(error));
    });
  }

}
