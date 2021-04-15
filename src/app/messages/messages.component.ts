import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  public messages: string[] = [];

  public updateMessage(input: HTMLInputElement) {
    this.messages = [...this.messages, input.value];
  }

  public notifyClick(event) {
    alert(JSON.stringify(event));
  }
}
