import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nameToDisplay = '';
  constructor(private afAuth: AngularFireAuth, private router: Router) { 
    this.afAuth.auth.onAuthStateChanged( user => {
      if (user) {
        this.nameToDisplay = user.email
      } else {
        console.log('header says no user')
      }
    })
  }

  ngOnInit() {
  }
  
  login(){
    this.nameToDisplay = window.prompt('Enter your name')
  }
  logout(){
    this.afAuth.auth.signOut();
    this.nameToDisplay = '';
    this.router.navigateByUrl('/')
  }

}
