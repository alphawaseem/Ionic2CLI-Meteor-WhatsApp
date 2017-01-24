import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from 'api/models';
import { Chats, Messages } from 'api/collections';
import { NavController, PopoverController } from 'ionic-angular';
import { MessagesPage } from '../messages/messages';
import { ChatsOptionsComponent } from './chats-options';

@Component({
  templateUrl: 'chats.html'
})
export class ChatsPage implements OnInit {
  chats;

  constructor(
    private navCtrl: NavController,
    private popoverCtrl: PopoverController) {
  }

  ngOnInit() {
    this.chats = Chats
      .find({})
      .mergeMap((chats: Chat[]) =>
        Observable.combineLatest(
          ...chats.map((chat: Chat) =>
            Messages
              .find({chatId: chat._id})
              .startWith(null)
              .map(messages => {
                if (messages) chat.lastMessage = messages[0];
                return chat;
              })
          )
        )
      ).zone();
  }

  showMessages(chat): void {
    this.navCtrl.push(MessagesPage, {chat});
  }

  removeChat(chat: Chat): void {
    this.chats = this.chats.map(chatsArray => {
      const chatIndex = chatsArray.indexOf(chat);
      chatsArray.splice(chatIndex, 1);

      return chatsArray;
    });
  }

  showOptions(): void {
    const popover = this.popoverCtrl.create(ChatsOptionsComponent, {}, {
      cssClass: 'options-popover chats-options-popover'
    });

    popover.present();
  }
}
