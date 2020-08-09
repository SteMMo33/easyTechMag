import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FotoXYZ1Page } from '../foto-xyz1/foto-xyz1';

@Component({
  selector: 'page-cartella-xyz1',
  templateUrl: 'cartella-xyz1.html'
})
export class CartellaXYZ1Page {

  constructor(public navCtrl: NavController) {
  }
  goToFotoXYZ1(params){
    if (!params) params = {};
    this.navCtrl.push(FotoXYZ1Page);
  }
}
