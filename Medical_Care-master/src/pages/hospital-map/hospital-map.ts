import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



declare var google;

@IonicPage()
@Component({
  selector: 'page-hospital-map',
  templateUrl: 'hospital-map.html',
})
export class HospitalMapPage {
  image: any;

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  pos:any ={};
  
    constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.pos = this.navParams.data;
    }

  ionViewDidLoad() {
    this.initMap();
  }

  initMap() {
    var location = this.pos;
    var infoWindow, map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: location

    });
    infoWindow = new google.maps.InfoWindow;

    this.image = '../assets/imgs/marker12x17.png'
    var marker = new google.maps.Marker({
      position: location,
      icon: this.image,
      map: map
    });
   
  }
}
