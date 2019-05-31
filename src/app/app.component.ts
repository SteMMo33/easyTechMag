import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ImpostazioniDiRetePage } from '../pages/impostazioni-di-rete/impostazioni-di-rete';
import { CartelleFotoPage } from '../pages/cartelle-foto/cartelle-foto';
import { CartellaXYZ1Page } from '../pages/cartella-xyz1/cartella-xyz1';
import { FotoXYZ1Page } from '../pages/foto-xyz1/foto-xyz1';
import { LetturaDelCodiceABarrePage } from '../pages/lettura-del-codice-abarre/lettura-del-codice-abarre';
import { ScattaLaFotoLivePage } from '../pages/scatta-la-foto-live/scatta-la-foto-live';


import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToImpostazioniDiRete(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ImpostazioniDiRetePage);
  }goToCartelleFoto(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CartelleFotoPage);
  }goToCartellaXYZ1(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CartellaXYZ1Page);
  }goToFotoXYZ1(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FotoXYZ1Page);
  }goToLetturaDelCodiceABarre(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LetturaDelCodiceABarrePage);
  }goToScattaLaFotoLive(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ScattaLaFotoLivePage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }
}
