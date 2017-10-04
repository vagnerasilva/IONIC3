import { FiredataProvider } from './../../providers/firedata/firedata';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NFCpagePage } from '../n-fcpage/n-fcpage';
import { PrincipalPage } from '../principal/principal';
//import { DrinkPersonPage } from '../drink-person/drink-person';
import { ConfirmadoPage } from '../confirmado/confirmado';


@Component({
  selector: 'page-drink-person',
  templateUrl: 'drink-person.html',
  providers:[FiredataProvider]

})
export class DrinkPersonPage {
  inputDisabled: boolean;
  public pos_bebidas
  public enviar
  public vetor = [];
  public receita
  public conter
  public resta
  public condition
  constructor(  public navCtrl: NavController,
                public db: FiredataProvider            
  ) {
    this.inputDisabled = true;// inicializa com true para os botoes comecarem!
    this.pos_bebidas= this.db.posBebidas()
  }

  ionViewDidLoad(){
    console.log("### SERVICE PEDIDO #### ")
    // console.log(this.pedido_escolhido)
    // console.log(this.pedido_aqui ) 
    // console.log(this.item)
    //console.log( this.pedido_teste)
    console.log(this.pos_bebidas)
    this.enviar = ""
    this.resta = 3
    this.conter = 0
    this.condition= true
    console.log("### SERVICE PEDIDO #### ")
  }

  escolhaBebida(item){
    console.log(item)
    console.log("Fazer push deste cara")
    if(this.vetor.length<3){
      if(this.vetor.length==0){
        console.log("primeira vez")
        this.conter=+1
        this.resta = this.resta -1
        this.receita = String(item.pos)
      }
      if(this.vetor.length==1){
        console.log("segunda vez")
        this.conter=+1
        this.resta = this.resta -1
        this.receita= this.receita + "," + item.pos
      }
      if(this.vetor.length==2){
        console.log("tres vez")
        this.conter=+1
        this.resta = this.resta -1
        this.receita= this.receita + "," + item.pos
        this.inputDisabled = false;
       // this.condition = false
      }

      this.vetor.push(item)
      //console.log(this.vetor)
      console.log(this.receita)
      //this.receita.push(item.pos)
    }else{
      console.log("ja tenho 3 item para a receita")
    }

   // this.enviar = vetor
  }
  goToDrinkPerson(params){
    if (!params) params = {};
    this.navCtrl.push(DrinkPersonPage);
  }
  goToNFCpage(params){
    if (!params) params = {
      nome:"Personalizado",
      receita:this.receita,
      valor: 100,
      url:"http://etilicos.com/wp-content/uploads/2011/02/20090812141603.jpg"
    };

    this.navCtrl.push(NFCpagePage,params
    );
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
