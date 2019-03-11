import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides, ToastController } from 'ionic-angular';
import { isEmpty } from '@firebase/util';

@IonicPage()
@Component({
  selector: 'page-all-symptoms',
  templateUrl: 'all-symptoms.html',
})
export class AllSymptomsPage {

  showSkip = true;

  @ViewChild('slides') slides: Slides;
  @ViewChild('age') age;
  @ViewChild('descDesesase') descDesesase;
  @ViewChild('medication') medication;
  @ViewChild('prevMedication') prevMedication;
  @ViewChild('nowState') nowState;

  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {
   this.age = ""
   this.descDesesase = ""
   this.medication = ""
   this.prevMedication = ""
   this.nowState = ""

  }

  onSlideChangeStart(slider: Slides ) {
    slider.lockSwipes(false)
  }

  showDesease(){
    if (isEmpty(this.age.value) || isEmpty(this.descDesesase.value) ||
      isEmpty(this.medication.value) ||isEmpty(this.prevMedication.value)
      || isEmpty(this.nowState.value)) {
      this.presentToast("Ju lutem mbushni hapsirat")
    }else{
      this.presentToast("Nuk u gjend asnje informacjon mbi semundjen tuaj!")
    }
    console.log("Clicking");
    
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
