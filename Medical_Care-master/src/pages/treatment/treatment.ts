import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ShowInfoDeseasePage } from '../show-info-desease/show-info-desease';

@IonicPage()
@Component({
  selector: 'page-treatment',
  templateUrl: 'treatment.html',
})
export class TreatmentPage {
  listOfDeseases: any[];

  constructor(public navCtrl: NavController, private http: Http) {
    let localData = this.http.get("assets/json/deseases.json").map(res => res.json().trajnimi[0].Semundjet);
    localData.subscribe(data => {
      this.listOfDeseases = data;
      console.log(this.listOfDeseases)
    });
  }


  showInfoDesease(name) {
    // console.log(this.listOfDeseases[this.findWithAttr(this.listOfDeseases, 'sName', name)])
    this.navCtrl.push(ShowInfoDeseasePage, this.listOfDeseases[this.findWithAttr(this.listOfDeseases, 'sName', name)]);
  }


  findWithAttr(array, attr, value) {
    for (var i = 0; i < array.length; i += 1) {
      if (array[i][attr] === value) {
        return i;
      }
    }
    return -1;
  }


}
