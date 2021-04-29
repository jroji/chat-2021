import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ChatComponent } from '@features/chat/chat.component';

const routes: Routes = [
  {
    path: 'contacts',
    // component: ContactsComponent
    loadChildren: () => import('@features/contacts/contacts.module').then((m) => m.ContactsModule)
  },
  {
    path: 'chat/:name',
    component: ChatComponent,
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
