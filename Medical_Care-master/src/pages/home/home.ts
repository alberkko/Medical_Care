import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { BodyMappingPage } from '../body-mapping/body-mapping';
import { AllSymptomsPage } from '../all-symptoms/all-symptoms';
import { TreatmentPage } from '../treatment/treatment';
import { ListOfTreatmentDeseasePage } from '../list-of-treatment-desease/list-of-treatment-desease';
import { ContactUsPage } from '../contact-us/contact-us';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {

  }

  goToListHospitals(){
    this.navCtrl.push(ListPage);
  }

  goToBodyMapping(){
    this.navCtrl.push(BodyMappingPage);
  }

  checkSymptoms(){
    this.navCtrl.push(AllSymptomsPage);
  }

  goToDeseases(){
    this.navCtrl.push(TreatmentPage);
  }

  goToThreatment(){
    this.navCtrl.push(ListOfTreatmentDeseasePage);
  }
  goToContact(){
    this.navCtrl.push(ContactUsPage);
  }

}
