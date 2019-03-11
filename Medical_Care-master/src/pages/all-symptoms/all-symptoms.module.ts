import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllSymptomsPage } from './all-symptoms';

@NgModule({
  declarations: [
    AllSymptomsPage,
  ],
  imports: [
    IonicPageModule.forChild(AllSymptomsPage),
  ],
})
export class AllSymptomsPageModule {}
