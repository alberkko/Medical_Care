import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BodyMappingPage } from './body-mapping';

@NgModule({
  declarations: [
    BodyMappingPage,
  ],
  imports: [
    IonicPageModule.forChild(BodyMappingPage),
  ],
})
export class BodyMappingPageModule {}
