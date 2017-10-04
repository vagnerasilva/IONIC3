import { FiredataProvider } from './../../providers/firedata/firedata';
import { Component } from '@angular/core';
import { PrincipalPage } from '../principal/principal';
import { DrinkPersonPage } from '../drink-person/drink-person';
import { ConfirmadoPage } from '../confirmado/confirmado';
import {  NavController, NavParams, Platform } from 'ionic-angular';
import { NFC } from "@ionic-native/nfc";
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'page-n-fcpage',
  templateUrl: 'n-fcpage.html',
   providers:[FiredataProvider] 
})
export class NFCpagePage {
  subscriptions: Array<Subscription> = new Array<Subscription>();
  public fila_drinks
  public item = {} 
  public pedido_escolhido
  public pedido_aqui
  public pedido_teste
  public receber = {}
  public drink
  public nome_drink
  public receita_drink
  public valor_drink
  public url_drink
  public img
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private nfc: NFC,
    public platform: Platform,
    public db: FiredataProvider
  ) {
    platform.ready().then(() => {
      this.initNFC();
      this.nome_drink = navParams.get('nome')
      this.receita_drink = navParams.get('receita')
      this.valor_drink = navParams.get('valor')
      this.url_drink=navParams.get('url')

      console.log(this.nome_drink)
      console.log(this.receita_drink)
      console.log(this.valor_drink)

      this.drink = this.nome_drink

      this.pedido_escolhido = this.db.pedidoEscolha();
      this.fila_drinks= this.db.filaDrinks() // * Pedidos feito por usuarios
      this.pedido_aqui=this.db.pedidoAqui;
      this.pedido_teste= this.db.pedidoTeste;
    
    });

  }
  ionViewDidLoad(){

 // console.log(this.pedido_aqui ) 
  // console.log( this.db.pedidoTeste) 
  //this.receber = ""
  let valor = "042A5F9A783F81";
  console.log(valor.length)
  this.receber = this.nome_drink
  this.img= this.url_drink
  }
  initNFC() {
    this.nfc.enabled().then(() => {
      this.addListenNFC();
      this.drink = this.receber;
      console.log('NFC Reader iniciado!');
    }).catch(err => {
      console.error('ERRO:', err);
    });
  }

  addListenNFC() {
    this.subscriptions.push(this.nfc.addTagDiscoveredListener().subscribe(nfcData => {
      // var nfcId = '';
      console.log("aqui")
      console.log(nfcData.tag.id)
      // var teste= this.nfc.bytesToHexString(nfcData.tag.id)
      // console.log(teste)
      // console.log("aqui")
      // teste = teste.toLocaleUpperCase()
      // console.log(teste)
      
      let valor = this.nfc.bytesToHexString(nfcData.tag.id);
      valor = valor.toLocaleUpperCase()
      console.log(valor.length)
      console.log(valor)
      var quebrado = [];
  
      for (var index = 0; index < valor.length; index++) {
       
       console.log( valor[index]) 
       quebrado.push(valor[index])
          if(index%2){
            quebrado.push(":")
          }
      }
      var final =""
      
      for (var i = 0; i < quebrado.length-1; i++) {
        var element = quebrado[i];
        final = final + element
      }
  
      console.log(final)

      // for (var idPart of nfcData.tag.id) {
      //   if (idPart < 0) {
      //     idPart = Math.abs(idPart) + 128;
      //   }

      //   var hex = (idPart).toString(16);
      //   if (hex.length > 2) {
      //     hex = hex.substring(hex.length - 2, hex.length);
      //   } else if (hex.length == 1) {
      //     hex = '0' + hex;
      //   }
      //   nfcId += hex + ':';
      // }
      // nfcId = nfcId.substring(0, nfcId.length - 1).toUpperCase();

      // console.log(nfcId);
      let dadoID= final
      console.log(dadoID)

      const promise =  this.fila_drinks.push({
        ID: dadoID,
        RECEITA: this.receita_drink ,
        DRINK: this.nome_drink,
        VALOR: this.valor_drink,
        timestamp: Date.now()
       });
       promise
          .then(() => {
            console.log('Added Item');
            this.item = {} ;
          // this.navCtrl.pop();
            console.log('NFC Data:', nfcData);
            this.goToConfirmado();
          } )
          .catch(err => console.log(err, 'Error Adding Item'));
            console.log('NFC Data:', nfcData);

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
