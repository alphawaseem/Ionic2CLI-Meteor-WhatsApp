import { NgModule, ErrorHandler } from '@angular/core';
import { MomentModule } from 'angular2-moment';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AutofocusDirective } from '../directives/autofocus';
import { ObserveDirective } from '../directives/observe';
import { ChatsPage } from '../pages/chats/chats';
import { ChatsOptionsComponent } from '../pages/chats/chats-options';
import { NewChatComponent } from '../pages/chats/new-chat';
import { LoginPage } from '../pages/login/login';
import { MessagesPage } from '../pages/messages/messages';
import { MessagesAttachmentsComponent } from '../pages/messages/messages-attachments'
import { MessagesOptionsComponent } from '../pages/messages/messages-options';
import { ShowPictureComponent } from '../pages/messages/show-picture';
import { ProfilePage } from '../pages/profile/profile';
import { VerificationPage } from '../pages/verification/verification';
import { PhoneService } from '../services/phone';
import { PictureService } from '../services/picture';
import { MyApp } from './app.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { NewLocationMessageComponent } from '../pages/messages/location-message';

@NgModule({
  declarations: [
    AutofocusDirective,
    ObserveDirective,
    ChatsOptionsComponent,
    ChatsPage,
    LoginPage,
    MessagesAttachmentsComponent,
    MessagesOptionsComponent,
    MessagesPage,
    MyApp,
    NewChatComponent,
    NewLocationMessageComponent,
    ProfilePage,
    ShowPictureComponent,
    VerificationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    MomentModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWoBdZHCNh5R-hB5S5ZZ2oeoYyfdDgniA'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ChatsOptionsComponent,
    ChatsPage,
    LoginPage,
    MessagesOptionsComponent,
    MessagesPage,
    MessagesAttachmentsComponent,
    MyApp,
    NewChatComponent,
    NewLocationMessageComponent,
    ProfilePage,
    ShowPictureComponent,
    VerificationPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PhoneService,
    PictureService
  ]
})
export class AppModule {}
