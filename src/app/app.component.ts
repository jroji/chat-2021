import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public messagesFromApp: string[] = [];

  pushMessage($event) {
    this.messagesFromApp = [...this.messagesFromApp, $event];
  }
}
