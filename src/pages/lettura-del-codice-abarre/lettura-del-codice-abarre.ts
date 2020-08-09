import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScattaLaFotoLivePage } from '../scatta-la-foto-live/scatta-la-foto-live';
import { CartellaXYZ1Page } from '../cartella-xyz1/cartella-xyz1';
import { FotoXYZ1Page } from '../foto-xyz1/foto-xyz1';

@Component({
  selector: 'page-lettura-del-codice-abarre',
  templateUrl: 'lettura-del-codice-abarre.html'
})
export class LetturaDelCodiceABarrePage {

  constructor(public navCtrl: NavController) {
  }
  goToScattaLaFotoLive(params){
    if (!params) params = {};
    this.navCtrl.push(ScattaLaFotoLivePage);
  }goToCartellaXYZ1(params){
    if (!params) params = {};
    this.navCtrl.push(CartellaXYZ1Page);
  }goToFotoXYZ1(params){
    if (!params) params = {};
    this.navCtrl.push(FotoXYZ1Page);
  }
}
