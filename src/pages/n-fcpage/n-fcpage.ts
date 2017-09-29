import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PrincipalPage } from '../principal/principal';
import { DrinkPersonPage } from '../drink-person/drink-person';
//import { NFCpagePage } from '../n-fcpage/n-fcpage';
import { ConfirmadoPage } from '../confirmado/confirmado';


@Component({
  selector: 'page-n-fcpage',
  templateUrl: 'n-fcpage.html'
})
export class NFCpagePage {

  constructor(public navCtrl: NavController) {
  }

  goToDrinkPerson(params){
    if (!params) params = {};
    this.navCtrl.push(DrinkPersonPage);
  }

  goToNFCpage(params){
    if (!params) params = {};
    this.navCtrl.push(NFCpagePage);
  }
  goToConfirmado(params){
    if (!params) params = {};
    this.navCtrl.push(ConfirmadoPage);
  }
  goToPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(PrincipalPage);
  }
}
