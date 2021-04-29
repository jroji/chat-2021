import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
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

    this.firestore.collection('chats').valueChanges().subscribe((values) => {
      console.log(values);
    })
  }

  pushMessage($event) {
    this.messagesFromApp = [...this.messagesFromApp, $event];
  }
}
