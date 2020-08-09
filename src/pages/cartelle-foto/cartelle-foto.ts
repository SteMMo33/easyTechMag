import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CartellaXYZ1Page } from '../cartella-xyz1/cartella-xyz1';
import { FotoXYZ1Page } from '../foto-xyz1/foto-xyz1';

@Component({
  selector: 'page-cartelle-foto',
  templateUrl: 'cartelle-foto.html'
})
export class CartelleFotoPage {

  constructor(public navCtrl: NavController) {
  }
  goToCartellaXYZ1(params){
    if (!params) params = {};
    this.navCtrl.push(CartellaXYZ1Page);
  }goToFotoXYZ1(params){
    if (!params) params = {};
    this.navCtrl.push(FotoXYZ1Page);
  }
}
