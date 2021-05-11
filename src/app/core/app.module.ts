import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app/app.component';
import { UserAvatarComponent } from '../shared/components/user-avatar/user-avatar.component';
import { UserService } from './services/user.service';
import { ChatModule } from '@features/chat/chat.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './store/reducers/users.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffectsService } from './store/effects/user.effects.service';

@NgModule({
  declarations: [
    AppComponent,
    UserAvatarComponent
],
  providers: [
    UserService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    StoreModule.forRoot({ users: usersReducer }),
    EffectsModule.forRoot([UserEffectsService]),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ChatModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: true,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
