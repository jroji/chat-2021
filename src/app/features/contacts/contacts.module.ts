import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    RouterModule.forChild([{
      path: '',
      component: ContactsComponent
    }]),
    CommonModule
  ]
})
export class ContactsModule { }
