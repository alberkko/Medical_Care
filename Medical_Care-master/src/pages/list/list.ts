import { Component } from '@angular/core';
import { NavParams, NavController, ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { HospitalMapPage } from '../hospital-map/hospital-map';
import { isEmpty } from '@firebase/util';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  listOfSpitale: any[];
  listOfDepatamente: any[];
  pos: any = {};
  sName: string = "Spitale";
  dName: string = "";
  position: string = "";


  constructor(public navParams: NavParams, private http: Http, private navCtrl: NavController, private toastCtrl: ToastController) {
    this.reloadDataSpitale(this.sName);
  }

  optionQytete(dName) {
    this.dName = dName;
    this.reloadDataDeparment(dName);

  }

  optionLloje(sName) {
    this.sName = sName;
    this.reloadDataSpitale(sName);
  }

  optionPos(pos) {
    this.position = pos;
    this.pos = this.listOfDepatamente[this.findWithAttr(this.listOfDepatamente, "dName", this.position)]["pos"];
  }


  reloadDataSpitale(sName) {
    let localData = this.http.get("assets/json/list_spitale.json").map(res => res.json());
    localData.subscribe(data => {
      this.listOfSpitale = data.qytete;
      this.listOfSpitale = this.listOfSpitale[this.findWithAttr(this.listOfSpitale, "sName", sName)][sName];
    });
  }

  reloadDataDeparment(dName) {

    let localData = this.http.get("assets/json/list_spitale.json").map(res => res.json());
    localData.subscribe(data => {
      this.listOfSpitale = data.qytete;
      this.listOfSpitale = this.listOfSpitale[this.findWithAttr(this.listOfSpitale, "sName", this.sName)][this.sName];
      this.listOfDepatamente = this.listOfSpitale[this.findWithAttr(this.listOfSpitale, "name", dName)]["departament"];
    });
  }

  findWithAttr(array, attr, value) {
    for (var i = 0; i < array.length; i += 1) {
      if (array[i][attr] === value) {
        return i;
      }
    }
    return -1;
  }

  goToMap() {
    console.log(this.pos);

    if (!isEmpty(this.pos)) {
      this.navCtrl.push(HospitalMapPage, this.pos);
    } else {
      this.presentToase();
    }
  }

  private presentToase() {
    let toast = this.toastCtrl.create({
      message: "Zgjidhni nje vendodhje!",
      duration: 3000,
      position: 'bottom'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

}