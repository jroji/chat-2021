import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { debounceTime, map } from 'rxjs/operators';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public messagesFromApp: string[] = [];
  public name?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private firestore: AngularFirestore,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.name = params.name;
    });

    this.firestore.collection('chats').valueChanges()
      .pipe(
        debounceTime(1000),
        map((values) => values.map((message) => message['text']))
      )
      .subscribe((values) => {
        this.messagesFromApp = values;
      });
  }

  pushMessage($event) {
    this.firestore.collection('chats').add({ text: $event });
  }
}
