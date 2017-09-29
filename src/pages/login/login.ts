import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PrincipalPage } from '../principal/principal';
import { DrinkPersonPage } from '../drink-person/drink-person';
import { NFCpagePage } from '../n-fcpage/n-fcpage';
import { ConfirmadoPage } from '../confirmado/confirmado';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }

  goToDrinkPerson(params){
    if (!params) params = {};
    this.navCtrl.push(DrinkPersonPage);
  }


  goToConfirmado(params){
    if (!params) params = {};
    this.navCtrl.push(ConfirmadoPage);
  }

  goToPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(PrincipalPage);
  }
  goToNFCpage(params){
    if (!params) params = {};
    this.navCtrl.push(NFCpagePage);
  }
}
