import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'ghv-app-messages',
  templateUrl: './message.component.html'
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
