import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {

  @ViewChild('name') name;
  @ViewChild('email') email;
  @ViewChild('description') description;


  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {

  }

  sendEmail() {
    if (this.name.value == "" || this.email.value == "" ||
    this.description.value == "" ) {
      this.presentToast("Plotesoni te gjitha te dhenat!");
    }else{
      this.presentToast("Email-i u dergua me sukses" + this.email.value);
    }
  }

  presentToast(message){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
