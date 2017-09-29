import { Component } from '@angular/core';
import { PrincipalPage } from '../principal/principal';
import { DrinkPersonPage } from '../drink-person/drink-person';
import { ConfirmadoPage } from '../confirmado/confirmado';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { NFC } from "@ionic-native/nfc";
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'page-n-fcpage',
  templateUrl: 'n-fcpage.html'
})
export class NFCpagePage {
  subscriptions: Array<Subscription> = new Array<Subscription>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private nfc: NFC,
    public platform: Platform
  ) {
    platform.ready().then(() => {
      this.initNFC();
    });
  }

  initNFC() {
    this.nfc.enabled().then(() => {
      this.addListenNFC();
      console.log('NFC Reader iniciado!');
    }).catch(err => {
      console.error('ERRO:', err);
    });
  }

  addListenNFC() {
    this.subscriptions.push(this.nfc.addTagDiscoveredListener().subscribe(nfcData => {
      // TODO:
      //  - gravar dados no firebase
      //  - ir para pagina de pedido confirmado
      console.log('NFC Data:', nfcData);
      this.goToConfirmado();
    }));
  }

  ionViewWillLeave() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  goToDrinkPerson(params){
    if (!params) params = {};
    this.navCtrl.push(DrinkPersonPage);
  }

  goToNFCpage(params){
    if (!params) params = {};
    this.navCtrl.push(NFCpagePage);
  }
  goToConfirmado(){
    this.navCtrl.push(ConfirmadoPage);
  }
  goToPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(PrincipalPage);
  }
}
