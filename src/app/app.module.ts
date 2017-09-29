import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NFC } from '@ionic-native/nfc';

import { PrincipalPage } from '../pages/principal/principal';
import { LoginPage } from '../pages/login/login';
import { DrinkPersonPage } from '../pages/drink-person/drink-person';
import { NFCpagePage } from '../pages/n-fcpage/n-fcpage';
import { ConfirmadoPage } from '../pages/confirmado/confirmado';
import { HomePage } from '../pages/home/home';


import { FiredataProvider } from '../providers/firedata/firedata';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';
const firebaseConfig = {
  apiKey: "AIzaSyAnsLVFrOvB4j7t7mmfwf8Cn5g3KTvUIrE",
  authDomain: "barionic-bd6fd.firebaseapp.com",
  databaseURL: "https://barionic-bd6fd.firebaseio.com",
  projectId: "barionic-bd6fd",
  storageBucket: "barionic-bd6fd.appspot.com",
  messagingSenderId: "821987373029"
};


@NgModule({
  declarations: [
    MyApp,
    PrincipalPage,
    LoginPage,
    DrinkPersonPage,
    NFCpagePage,
    ConfirmadoPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage,      // Pagina Inicio
    LoginPage,          // Login Desligado
    DrinkPersonPage,    // Personalizacao do Drink
    NFCpagePage,        // Lendo NFC e confirmando
    ConfirmadoPage,     // Confirmando pedido final
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FiredataProvider,
    NFC
  ]
})
export class AppModule {}
