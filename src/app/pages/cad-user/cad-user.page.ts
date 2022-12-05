import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { HttpClient} from '@angular/common/http'

import { UserService } from 'src/app/api/user.service';


const urlBase = "http://localhost:3000";


@Component({
  selector: 'app-cad-user',
  templateUrl: './cad-user.page.html',
  styleUrls: ['./cad-user.page.scss'],
})
export class CadUserPage implements OnInit {

  public nome:string;
  public email:string;
  public senha:string;
  public tipo:string;
  

  constructor(private toastController:ToastController,
    private http:HttpClient,
    private userService:UserService) {
   }

  ngOnInit() {
  }
  
  handleChange(e:any)
  {
    console.log(e.detail.value);
    this.tipo = e.detail.value;
  }



  private limpar()
  {
    this.nome = "",
    this.email = "",
    this.senha = ""
  }
  private criarUser()
  {
    const p= 
    {
      "email": this.email,
      "nome": this.nome,
      "senha":this.senha,
      "tipo": this.tipo
      
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
    
    let User = this.criarUser();
    console.log(User);
  
   
    this.userService.create(User)
    .then((user) =>
    {
      console.log("Deu good");
      this.exibirMensagem("Usuário criado com sucesso!");
      this.limpar();
      
      console.log(user);
    })
    .catch((erro) =>
    {
      console.log("deu ruim");
      this.exibirMensagem("Houve um erro ao criar o usuário! " + erro.statusText);
      this.limpar();
      console.log(erro);
    })

  }



}
