import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NFCpagePage } from '../n-fcpage/n-fcpage';
import { PrincipalPage } from '../principal/principal';
//import { DrinkPersonPage } from '../drink-person/drink-person';
import { ConfirmadoPage } from '../confirmado/confirmado';


@Component({
  selector: 'page-drink-person',
  templateUrl: 'drink-person.html'
})
export class DrinkPersonPage {

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
