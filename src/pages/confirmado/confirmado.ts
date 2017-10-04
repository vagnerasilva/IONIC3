import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PrincipalPage } from '../principal/principal';
import { DrinkPersonPage } from '../drink-person/drink-person';
import { NFCpagePage } from '../n-fcpage/n-fcpage';





@Component({
  selector: 'page-confirmado',
  templateUrl: 'confirmado.html'
})
export class ConfirmadoPage {

  constructor(public navCtrl: NavController) {
          
  }
  ionViewDidLoad(){

    setTimeout(() => {
      // this.navCtrl.popToRoot();
      // might try this instead
     this.navCtrl.push(PrincipalPage);
  }, 4500);


  }



  goToPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(PrincipalPage);
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

}
