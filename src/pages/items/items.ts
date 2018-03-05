import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { 
  AfoListObservable, 
  AngularFireOfflineDatabase } from 'angularfire2-offline/database';

@IonicPage()
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {

  public items: AfoListObservable<any[]>;

  constructor(afoDatabase: AngularFireOfflineDatabase, public alertCtrl: AlertController) {
    
    this.items = afoDatabase.list('/items');
  }


  addSong(): void {
    const prompt = this.alertCtrl.create({
      title: 'Add Song',
      message: "Add a new song to your playlist",
      inputs: [
        {
          name: 'songName',
          placeholder: 'Song Name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.items.push({
              songName: data.songName
            });
          }
        }
      ]
    });
    prompt.present();
  }


  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemsPage');
  }

}
