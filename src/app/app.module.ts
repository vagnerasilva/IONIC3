import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PrincipalPage } from '../pages/principal/principal';
import { LoginPage } from '../pages/login/login';
import { DrinkPersonPage } from '../pages/drink-person/drink-person';
import { NFCpagePage } from '../pages/n-fcpage/n-fcpage';
import { ConfirmadoPage } from '../pages/confirmado/confirmado';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PrincipalPage,
    LoginPage,
    DrinkPersonPage,
    NFCpagePage,
    ConfirmadoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage,      // Pagina Inicio
    LoginPage,          // Login Desligado
    DrinkPersonPage,    // Personalizacao do Drink
    NFCpagePage,        // Lendo NFC e confirmando 
    ConfirmadoPage      // Confirmando pedido final
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}