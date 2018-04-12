import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { ReversePipe } from '../reverse.pipe';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

  constructor(public messageService: MessageService, public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.messageService.getAllMessages();
  }

}
