import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AcessService } from 'src/app/api/acess.service';
import { StationService } from 'src/app/api/station.service';
import { UserService } from 'src/app/api/user.service';

@Component({
  selector: 'app-acessos',
  templateUrl: './acessos.page.html',
  styleUrls: ['./acessos.page.scss'],
})
export class AcessosPage implements OnInit {

  public estacoes: any[] = [];
  public estacoesA: any[] = []
  public users: any[] = [];
  public acessos: any[] = [];
  public estacaoAtual = undefined;
  public user: any = {};


  constructor(
    private http: HttpClient,
    private toastController: ToastController,
    private userService: UserService,
    private stationService: StationService,
    private acessService: AcessService
  ) {
    this.getUsers();
    this.getEstacoes();
    this.getAcessos();
  }



  ngOnInit() {

  }
  getAcessos() {
    this.acessService.getAll()
      .then((acessos: []) => {
        this.acessos = acessos;
      })
      .catch((erro) => {
        console.log(erro);
      })
  }

  getEstacoes() {
    this.stationService.getAll()
      .then((estacoes: []) => {

        this.estacoes = estacoes;
      })
      .catch((erro) => {
        console.log("deu ruim");

        console.log(erro);
      })

  }
  getUsers() {
    this.userService.getAll()
      .then((usuarios: []) => {

        this.users = usuarios;

        // console.log(usuarios);
      })
      .catch((erro) => {
        console.log("deu ruim");

        console.log(erro);
      })

  }
  usuarioEscolhido(e: any) {
    //  console.log(e.detail.value);
    this.user = e.detail.value;
    // this.getEstacoes();
    this.semAcesso(this.user.id);
  }


  ///arrumar
  semAcesso(id: number) {

    this.getAcessos();
    this.getEstacoes();
    console.log("Id atual eh " + id);


    console.log(
      this.estacoes);
    let acessoUser = this.acessos.filter((acesso) => {
      if (acesso.userId == id) {
        return true;
      }
      else {
        return false;
      }
    })
    // console.log(acessoUser);

    console.log("Tamanho das estações eh " + this.estacoes.length)
    console.log(this.estacoes);
    for (let acesso of acessoUser) {
      // console.log("ID atual da estacao = " + estacao.id);

      for (let i = 0; i <= this.estacoes.length; i++) {
        let estacao = this.estacoes[i];
        console.log(estacao);

        if (estacao != undefined || estacao != null) {
          if ((acesso.estacaoId == estacao.id) && (acesso.userId == this.user.id)) {

            this.estacoes.splice(i, 1);
            console.log("Posicao removida = " + i);
            //  console.log(this.estacoes);
            i = 0;
            //  break;
            // console.log("Estação a ser removida id = " + this.estacoes[pos].id);




          }
        }



      }
    }

    //


    console.log("Tamanho das estações att eh " + this.estacoes.length)
    this.estacoesA = this.estacoes;
    //console.log(this.estacoesA);
  }





  handleChange(ev) {
    this.estacaoAtual = ev.target.value;
    console.log(this.estacaoAtual);
  }
  create() {

    let j = 0;

    if (this.estacaoAtual != null && this.user != null) {


      for (let estacao of this.estacaoAtual) {

        for (let acess of this.acessos) {
          if (acess.estacaoId == estacao.id && this.user.id == acess.userId) {
            j = 1;
          }
        }

        if (j == 0) {
          let acesso =
          {
            userId: this.user.id,
            estacaoId: estacao.id

          }
          console.log(acesso);
          this.acessService.create(acesso).
            then((acesso) => {
              this.exibirMensagem("Permissão concedida com sucesso");
              this.getAcessos();
              // console.log(acesso);
            })
            .catch((error) => {
              console.log(error);
              this.exibirMensagem("Erro aconteceu: " + error);
            })
        }
        else {
          this.exibirMensagem("O usuário já tem acesso a essa estação");
        }


      }

    }
  }
  private async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}

