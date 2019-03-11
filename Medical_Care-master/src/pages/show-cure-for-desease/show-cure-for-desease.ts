import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowCureForDeseasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-cure-for-desease',
  templateUrl: 'show-cure-for-desease.html',
})
export class ShowCureForDeseasePage {

  singleBodyPart:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.singleBodyPart = this.navParams.data;
  }


}
