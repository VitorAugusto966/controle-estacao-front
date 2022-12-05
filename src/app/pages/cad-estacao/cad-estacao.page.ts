import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { StationService } from 'src/app/api/station.service';

const urlBase = "http://localhost:3000";

@Component({
  selector: 'app-cad-estacao',
  templateUrl: './cad-estacao.page.html',
  styleUrls: ['./cad-estacao.page.scss'],
})
export class CadEstacaoPage implements OnInit {

    public cidade:string;


  constructor(private toastController:ToastController, private http:HttpClient, private stationService:StationService) { }

  ngOnInit() {
  }

  private limpar()
  {
    this.cidade = ""

  }

  private criarEstacao()
  {
    const p= 
    {
      "cidade":this.cidade
      
    }
    return p;
  }

  private async exibirMensagem(mensagem:string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      position:'bottom'
    });
    toast.present();
  }

  create()
  {
    let estacao = this.criarEstacao();
    console.log(estacao);

    this.stationService.create(estacao)
    .then((estacao) =>
    {
      console.log("Deu good");
      this.exibirMensagem("Estação criada com sucesso!");
      this.limpar();
      
      console.log(estacao);
    })
    .catch((erro) =>
    {
      console.log("deu ruim");
      this.exibirMensagem("Houve um erro ao criar a estação!");
      this.limpar();
      console.log(erro);
    })

  }

}
