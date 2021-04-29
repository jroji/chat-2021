import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.css']
})
export class TextButtonComponent implements OnInit {
  @Input() public label: string = 'Send!';
  @Output() public textSent = new EventEmitter();

  constructor(private component: ElementRef) {}

  ngOnInit(): void {
    this.component.nativeElement.setAttribute('role', 'button');
  }

  public sendMessage(input: HTMLInputElement) {
    this.textSent.emit(input.value);
    input.value = '';
  }

  public clearMessage() {
    alert("LIMPIANDO");
  }

}
