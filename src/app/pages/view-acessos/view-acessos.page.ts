import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AcessService } from 'src/app/api/acess.service';
import { StationService } from 'src/app/api/station.service';
import { UserService } from 'src/app/api/user.service';

@Component({
  selector: 'app-view-acessos',
  templateUrl: './view-acessos.page.html',
  styleUrls: ['./view-acessos.page.scss'],
})
export class ViewAcessosPage implements OnInit {

  public users: any[] = [];
  public estacoes:any [] = [];
  public acessos:any[] = [];
  public listAcessos:any[] = [];

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private stationService: StationService,
    private acessoService: AcessService,
    private toastController: ToastController,
    private router: Router) {
    this.getEstacoes();
    this.getUsers();
    this.getAcessos();
  }

  ngOnInit() {
  }

  private async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  getUsers() {
    this.userService.getAll()
      .then((usuarios: []) => {

        this.users = usuarios;

        console.log(usuarios);
      })
      .catch((erro) => {
        console.log(erro);
      })

  }

  getEstacoes() {

    this.stationService.getAll()
      .then((estacoes: []) => {

        this.estacoes = estacoes;

        console.log(estacoes);
      })
      .catch((erro) => {
        console.log(erro);
      })

  }

  getAcessos() {
    this.acessoService.getAll()
      .then((acessos: []) => {
        console.log(acessos);
        this.acessos = acessos;
        this.get();
      })
      .catch((erro) => {
        console.log(erro);
      })
  }

  get()
  {
    let nome;
    let cidade;

    if(this.acessos.length > 0 )
    {
      for(let acesso of this.acessos)
      {
  
          for(let estacao of this.estacoes)
          {
              if(acesso.estacaoId == estacao.id)
              {
                //console.log(estacao.cidade);
                cidade = estacao.cidade;
              }
          }
  
          for(let user of this.users)
          {
            if(acesso.userId == user.id)
            {
              nome = user.nome;
            }
          }
          let a = 
          {
            "nome": nome,
            "cidade":cidade
          }
          //console.log(a);
          this.listAcessos.push(a);
        
  
  
      }
    }
  

    else
    {
      console.log("vazio");
    }
  }

}
