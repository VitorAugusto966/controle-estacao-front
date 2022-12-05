import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/api/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {

  public nome:string;
  public email:string;
  public senha:string;
  public tipo:string;
  public id:number;
  public user:any ={}

  constructor(private router: Router,
    private http:HttpClient,
    private userService:UserService,
    private toastController:ToastController)
     {
      console.log(this.router.getCurrentNavigation().extras.state);
      this.user = this.router.getCurrentNavigation().extras.state;
      this.inicializar();
     }


     inicializar()
     {
      this.nome = this.user.nome;
      this.email = this.user.email;
      this.senha = this.user.senha;

     }
 ngOnInit() {
  }

  private async exibirMensagem(mensagem:string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      position:'bottom'
    });
    toast.present();
  }

  gerarPassword()
  {
    return Math.random().toString(36).substring(2, 10)
  }
  private criarUser()
  {
    const p= 
    {
      "id":this.user.id,
      "email": this.email,
      "nome": this.nome,
      "senha":this.senha,
      "tipo": this.user.tipo
      
    }
    return p;

  }
  
  private delete()
  {
    this.userService.delete(this.user.id)
    .then((user) =>
    {
      this.exibirMensagem("Usuário excluido com sucesso");
      this.router.navigateByUrl('folder/');
      
    })
    .catch((erro)=>
    {
      this.exibirMensagem("Erro ao excluir");
    })
  }

  private update()
  {
    let User = this.criarUser();
    console.log(User);

    this.userService.update(User)
    .then((user)=> 
    {
      if(this.senha != this.user.senha)
      {
        this.redefinirSenha(this.senha);
      }
      console.log(user);
      this.exibirMensagem("Usuário atualizado com sucesso");
      this.router.navigateByUrl('folder/');
    })
    .catch((erro)=>
    {
        console.log(erro);
        this.exibirMensagem("Não foi possível atualizar o usuário");
    })
  }


  redefinirSenha(senha:any)
  {
   

    const email = 
    {
      to:this.user.email,
      message: "Sua senha foi redefinida: " + senha,
      subject: "Redefinição de senha"
    }
  

    this.userService.redefinir(email)
    .then((resposta) =>
    {
     
      
    })
    .catch((erro)=>
    {
      console.log(erro);
      this.exibirMensagem("Erro ao redefinir senha");
    })
  }



}
