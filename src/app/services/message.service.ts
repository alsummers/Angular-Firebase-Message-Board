import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth'
import { Router } from '@angular/router';

@Injectable()
export class MessageService {
  allMessagesArray = [];
  messageWeAreEditing = {};

  constructor(private afd: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router) { }

  sendMessage(messageTitle, messageContent) {
    const newMessage = {
      title: messageTitle,
      content: messageContent,
      owner: this.afAuth.auth.currentUser.uid
    };
    this.afd.list('/messages').push(newMessage).then(() => {
      
    })
  }
  getAllMessages() {
    this.allMessagesArray = [] ///resets array, makes sure there are no duplicates
    this.afd.database.ref('/messages').once('value').then( returnedResponse => {
      const allMessagesAsOneGiantObject = returnedResponse.val() ? returnedResponse.val() : {};
      Object.keys(allMessagesAsOneGiantObject).forEach( eachKey => {
        this.allMessagesArray.push({
          key: eachKey,
          title: allMessagesAsOneGiantObject[eachKey]['title'],
          content: allMessagesAsOneGiantObject[eachKey]['content'],
          owner: allMessagesAsOneGiantObject[eachKey]['owner']
        })
      })
    }).catch( err => {
      console.log('err: ', err)
    })
  }
  deleteThisMessage(keyToDelete) {
    this.afd.object(`/messages/${keyToDelete}`).remove().then(() => {
      this.getAllMessages();
    }).catch( err => {
      console.log('err deleting message: ', err)
    })
  }
  editThisMessage(wholeMessage) {
    this.messageWeAreEditing = wholeMessage;
    this.router.navigateByUrl('edit')
  }
  sendUpdatedMessageToFirebase() {
    const uniqueKeyWeAreEditing = this.messageWeAreEditing['key'];
    const editedMessage = {
      title: this.messageWeAreEditing['title'],
      content: this.messageWeAreEditing['content']
    };
    this.afd.object(`/messages/${uniqueKeyWeAreEditing}`).update(editedMessage).then(() => {
      this.router.navigateByUrl('/')
    }).catch( err => {
      console.log('err: ', err)
    })
  }

}
