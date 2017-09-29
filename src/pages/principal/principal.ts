import { FiredataProvider } from './../../providers/firedata/firedata';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DrinkPersonPage } from '../drink-person/drink-person';
import { NFCpagePage } from '../n-fcpage/n-fcpage';
import { ConfirmadoPage } from '../confirmado/confirmado';



@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
  providers:[FiredataProvider] 
})
export class PrincipalPage {
  public lista_drinks 
  public fila_drinks
  public pos_bebidas
  public pos_bebidas_array
  public item = {} 
  public controle = []
  constructor(public navCtrl: NavController,
          //    public navParams: NavParams,
              public db: FiredataProvider
  
            ) {

              this.lista_drinks = this.db.listDrinks(); // * Lista de Bebidas a serem oferecidas na escolha
              this.fila_drinks= this.db.filaDrinks() // * Pedidos feito por usuarios
              this.pos_bebidas= this.db.posBebidas() // * Pedidos feito por usuarios
              console.log("#### ")
              // console.log(this.lista_drinks)
          
            //   console.log(this.fila_drinks)
              console.log("#### ")
  }
  ionViewDidLoad(){
    // console.log(this.db.listAccounts()); 
    // this.lista_filmes = this.db.listAccounts()
    console.log(" buscando as posicoes das garrafas")
    console.log(this.pos_bebidas)
   //  this.pos_bebidas
   //         .map(i=>{
   //               console.log(i)
   //               return i}
   //             );
 
               let items= this.pos_bebidas.map(i=>{
                // console.log(i)
                 this.controle.push(i)
                 return i});
               items
                 .forEach(i=>i
                       .forEach(e=>(
                  //       console.log(controle)
                  console.log(e)
                 
                               )
                       ) 
                 )
 
               // setTimeout(function() {
               //   console.log(controle)
               // }, 2000);
               
    console.log(" buscando as posicoes das garrafas")
    
   }
   saveItem(item) {
    //console.log(item);
   // console.log(controle)
    const numero = Math.floor(Math.random() * 10)
    const promise =  this.fila_drinks.push({
        ID: "04:57:5C:9A:78:3F:8"+numero,
        RECEITA: "2," + (numero-2) +"," +(numero),
        DRINK: item.title,
        VALOR: Number(item.valor),
        timestamp: Date.now()
    });
    promise
        .then(
            () =>{
           console.log(this.controle ) 
          }
        )
        .then(() => {
            console.log('Added Item');
            this.item = {} ;
           // this.navCtrl.pop();
        } )
        .catch(err => console.log(err, 'Error Adding Item'));



  }
  goToNfcPage(escolha) {
   // console.log(escolha)

    this.saveItem(escolha)
    //this.navCtrl.push(PedidoPage);
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
