import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-infopart',
  templateUrl: 'infopart.html',
})
export class InfopartPage {

  singleBodyPart:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.singleBodyPart = this.navParams.data;
  }


  
}
