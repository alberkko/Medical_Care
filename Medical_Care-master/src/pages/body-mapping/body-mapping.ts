import { Component, Injectable } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { InfopartPage } from '../infopart/infopart';


/**
 * Generated class for the BodyMappingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Injectable()
@IonicPage()
@Component({
  selector: 'page-body-mapping',
  templateUrl: 'body-mapping.html',
})
export class BodyMappingPage {

  // private listOfPart:any = [];
  listOfPart: any[];
  private segment = 'organe';



  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.changeBodyLevelToStart(this.segment);
  }

  changeBodyLevelToStart(value) {
    if (value === 'organe') {
      let localData = this.http.get("assets/json/organe_sisteme.json").map(res => res.json().pjeset[0].organe);
      console.log(localData)
      localData.subscribe(data => {
        this.listOfPart = data;
        // console.log(this.listOfPart)
      });
    } else if (value === 'sisteme') {
      let localData = this.http.get("assets/json/organe_sisteme.json").map(res => res.json().pjeset[1].sisteme);
      console.log(localData)
      localData.subscribe(data => {
        this.listOfPart = data;

      });
    } else {
      console.log("There is an error ");
    }

  }

  showNeededPart(part) {
    // console.log( this.findWithAttr(this.listOfPart,'name', part));
    // console.log(this.listOfPart[this.findWithAttr(this.listOfPart, 'name', part)]);
    this.navCtrl.push(InfopartPage, this.listOfPart[this.findWithAttr(this.listOfPart, 'name', part)]);
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
