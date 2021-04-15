import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.css']
})
export class TextButtonComponent implements OnInit {
  @Input() public label: string = 'Send!';
  @Output() public textSent = new EventEmitter();

  ngOnInit(): void { }

  public sendMessage(input: HTMLInputElement) {
    this.textSent.emit(input.value);
    input.value = '';
  }

}
