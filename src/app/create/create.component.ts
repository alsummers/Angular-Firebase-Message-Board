import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newMessageTitle = '';
  newMessageContent = '';
  constructor(private messageService: MessageService, private router: Router) { }

  ngOnInit() {
  }

  createMessage() {
    if (
      this.newMessageTitle.trim() === '' || this.newMessageContent.trim() === ''
    ) {
      return
    }

    this.messageService.sendMessage(this.newMessageTitle, this.newMessageContent);
    this.router.navigateByUrl('/');
  }

}
