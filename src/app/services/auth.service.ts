import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  registerUserWithFirebase(email, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then( authedUserInfo => {
      console.log('Successfully created user, info is:', authedUserInfo);
    }).catch( err => {
      console.log('Error creating user, error:', err );
    });
  }
  loginUserToFirebase(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then( res => {
      this.router.navigateByUrl('/')
    }).catch( err => {
      console.log('Error: ', err)
    })
  }

}
