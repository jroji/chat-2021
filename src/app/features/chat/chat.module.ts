import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MimimiPipe } from './pipes/mimimi.pipe';
import { TextButtonComponent } from './components/text-button/text-button.component';

@NgModule({
  declarations: [
    MimimiPipe,
    ChatComponent,
    TextButtonComponent,
    MessagesComponent
  ],
  imports: [
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    CommonModule
  ]
})
export class ChatModule { }
