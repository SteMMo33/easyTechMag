import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CartelleFotoPage } from '../pages/cartelle-foto/cartelle-foto';
import { ImpostazioniDiRetePage } from '../pages/impostazioni-di-rete/impostazioni-di-rete';
import { LetturaDelCodiceABarrePage } from '../pages/lettura-del-codice-abarre/lettura-del-codice-abarre';
import { LoginPage } from '../pages/login/login';
import { CartellaXYZ1Page } from '../pages/cartella-xyz1/cartella-xyz1';
import { FotoXYZ1Page } from '../pages/foto-xyz1/foto-xyz1';
import { ScattaLaFotoLivePage } from '../pages/scatta-la-foto-live/scatta-la-foto-live';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CartelleFotoPage,
    ImpostazioniDiRetePage,
    LetturaDelCodiceABarrePage,
    LoginPage,
    CartellaXYZ1Page,
    FotoXYZ1Page,
    ScattaLaFotoLivePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CartelleFotoPage,
    ImpostazioniDiRetePage,
    LetturaDelCodiceABarrePage,
    LoginPage,
    CartellaXYZ1Page,
    FotoXYZ1Page,
    ScattaLaFotoLivePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}