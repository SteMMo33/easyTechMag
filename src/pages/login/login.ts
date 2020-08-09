import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LetturaDelCodiceABarrePage } from '../lettura-del-codice-abarre/lettura-del-codice-abarre';
import { ScattaLaFotoLivePage } from '../scatta-la-foto-live/scatta-la-foto-live';
import { CartellaXYZ1Page } from '../cartella-xyz1/cartella-xyz1';
import { FotoXYZ1Page } from '../foto-xyz1/foto-xyz1';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToLetturaDelCodiceABarre(params){
    if (!params) params = {};
    this.navCtrl.push(LetturaDelCodiceABarrePage);
  }goToScattaLaFotoLive(params){
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
