import { NFCpagePage } from './../n-fcpage/n-fcpage';
import { FiredataProvider } from './../../providers/firedata/firedata';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DrinkPersonPage } from '../drink-person/drink-person';

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
  public pedido_escolhido
  public pos_bebidas_array
  public item = {} 
  public controle = []
  public pedido_aqui
  public pedido_teste
  public escolha 
  public enviar = {}
  public nome_drink
  public receita_drink
  public valor_drink
  public url_drink
  inputDisabled: boolean;
  constructor(public navCtrl: NavController,
          //    public navParams: NavParams,
              public db: FiredataProvider
    
            ) {

              this.lista_drinks = this.db.listDrinks(); // * Lista de Bebidas a serem oferecidas na escolha
              this.fila_drinks= this.db.filaDrinks() // * Pedidos feito por usuarios
              this.pos_bebidas= this.db.posBebidas() // * Pedidos feito por usuarios
              this.pedido_escolhido= this.db.pedidoEscolha(); // * Pedidos feito por Escolhido
              this.inputDisabled = true;// inicializa com true para os botoes comecarem!

  } 
  ionViewDidLoad(){
    console.log("### SERVICE PEDIDO #### ")
    // console.log(this.pedido_escolhido)
    // console.log(this.pedido_aqui ) 
    // console.log(this.item)
    //console.log( this.pedido_teste)
    this.enviar = ""
    console.log("### SERVICE PEDIDO #### ")
   

    // let final = ""
    // if (valor.length > 2) {
    //   valor = valor.substring(valor.length - 2, valor.length);
    // } else if (valor.length == 1) {
    //   valor = '0' + valor;
    // }
    // final += valor + ':';
    // console.log(final)
    // console.log(this.db.listAccounts()); 
    // this.lista_filmes = this.db.listAccounts()
   // console.log(" buscando as posicoes das garrafas")
   // console.log(this.pos_bebidas)
    this.pos_bebidas
           .map(i=>{
                 console.log(i)
                 return i}
               );
             //   let teste = []
               let items= this.pos_bebidas.map(i=>{
                // console.log(i)
               //  this.controle.push(i)
                 return i});
               items
                 .forEach(i=>i
                       .forEach(e=>(
                  //       console.log(controle)
                  //console.log(e),
                  this.controle.push(e)
                               )
                       ) 
                 )
 
               // setTimeout(function() {
               //   console.log(controle)
               // }, 2000);
               
   // console.log(" buscando as posicoes das garrafas")
    
   }
   escolhaPedido(item){
    console.log(item)
    this.inputDisabled = false;
    //  this.db.pedidoAqui=item
      this.enviar = item;
      this.escolha= item.title;
      this.nome_drink= item.title
      this.receita_drink= item.bebidas
      let receitastring = "";
      this.url_drink = item.url
   //   console.log(item.bebidas.length)
      item.bebidas.forEach(beb => {
       // console.log(beb) 
        this.controle.forEach(element => {
        //  console.log(element)
        //  console.log(element.pos)
          if(beb==element.tipo){
           // console.log("Achei")
           // console.log(beb)
           // console.log(element.tipo)
            receitastring = receitastring + String(element.pos)+","
          }
        });
        // for (var index = 0; index < this.controle.length; index++) {
        //   var element = this.controle[index];
        //   console.log(index)
        //   console.log(element.pos)
        // }
    //   console.log(receitastring)

       var quebrado = receitastring; 
       
       var vetor = [];
       
           for (var index = 0; index < quebrado.length; index++) {
            
         //   console.log( quebrado[index]) 
            vetor.push(quebrado[index])
            vetor.push(",")
           }
       //    console.log(vetor)


      // receitastring.slice(beginIndex[, endIndex])
      //  console.log(receitastring)
      });
     
      // for (var index = 0; index < item.bedidas.length; index++) {
      //   var element = item.bedidas[index];
        
      // }
      this.receita_drink = receitastring;
      this.valor_drink= item.valor
    //  console.log(this.receita_drink)
      var final = ""
      for (var i = 0; i < this.receita_drink.length-1; i++) {
        var element = this.receita_drink[i];
        final = final + element
      }
      console.log(final)
     // this.pedido_teste=item;
    //  this.navCtrl.push(
    //    item
    //  )
    this.receita_drink=final
    //  this.navCtrl.push(NFCpagePage,{
    //   teste1:"teste1",
    //   teste2:"teste2"
    //  })
   }
   saveItem(item) {
    //console.log(item);
   // console.log(controle)
  
    const numero = Math.floor(Math.random() * 10)
    const promise =  this.fila_drinks.push({
       
        RECEITA: "2," + (numero-2) +"," +(numero),
        DRINK: item.title,
        VALOR: Number(item.valor),
        timestamp: Date.now()
    });
    promise
        .then(
            () =>{
         //  console.log(this.controle ) 
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


    if (!params) params = {
      nome:this.nome_drink,
      receita:this.receita_drink,
      valor:this.valor_drink,
      url:this.url_drink
    };

    this.navCtrl.push(NFCpagePage,params
    );
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
