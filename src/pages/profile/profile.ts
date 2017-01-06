import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { MeteorObservable } from 'meteor-rxjs';
import { Profile } from 'api/models/whatsapp-models';
import { TabsPage } from "../tabs/tabs";

@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfilePage implements OnInit {
  profile: Profile;

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit(): void {
    this.profile = Meteor.user().profile || {
      name: '',
      picture: '/ionicons/dist/svg/ios-contact.svg',
      thumbnail: '/ionicons/dist/svg/ios-contact.svg'
    };
  }

  done(): void {
    MeteorObservable.call('updateProfile', this.profile).subscribe({
      next: () => {
        this.navCtrl.push(TabsPage);
      },
      error: (e: Error) => {
        this.handleError(e);
      }
    });
  }

  uploadProfilePic(data: File): void {
    MeteorObservable.call<Profile>('uploadProfilePic', data).subscribe({
      next: (profile: Profile) => {
        this.profile.picture = profile.picture;
        this.profile.thumbnail = profile.thumbnail;
      },
      error: (e: Error) => {
        this.handleError(e);
      }
    });
  }

  private handleError(e: Error): void {
    console.error(e);

    const alert = this.alertCtrl.create({
      title: 'Oops!',
      message: e.message,
      buttons: ['OK']
    });

    alert.present();
  }
}
