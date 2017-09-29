import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DrinkPersonPage } from '../drink-person/drink-person';
import { NFCpagePage } from '../n-fcpage/n-fcpage';
//import { PrincipalPage } from '../principal/principal';
import { ConfirmadoPage } from '../confirmado/confirmado';



@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'
})
export class PrincipalPage {

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
  goToPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(PrincipalPage);
  }
  goToConfirmado(params){
    if (!params) params = {};
    this.navCtrl.push(ConfirmadoPage);
  }


}
