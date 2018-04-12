import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth'

@Injectable()
export class MessageService {

  constructor(private afd: AngularFireDatabase, private afAuth: AngularFireAuth) { }

  sendMessage(messageTitle, messageContent) {
    const newMessage = {
      title: messageTitle,
      content: messageContent,
      owner: this.afAuth.auth.currentUser.uid
    };
    this.afd.list('/messages').push(newMessage).then(() => {
      
    })
  }

}
