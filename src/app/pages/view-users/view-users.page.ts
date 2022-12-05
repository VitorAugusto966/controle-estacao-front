import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/api/user.service';



@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.page.html',
  styleUrls: ['./view-users.page.scss'],
})
export class ViewUsersPage implements OnInit {

  public users:any[] = [];

  constructor(
    private http:HttpClient,
    //private emailComposer: EmailComposer,
    private userService: UserService,
    private toastController:ToastController,
    private router:Router) { 
    this.get();
    console.log(this.gerarPassword());
    
  
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

 

  ngOnInit() {
  }

  goToEditUser(user: any) {
    this.router.navigateByUrl(
      `/edit-user`,
       { state: user }
    );
  }


  get()
  {
    this.userService.getAll()
    .then((usuarios:[]) =>
    {
      
      this.users = usuarios;
      
      console.log(usuarios);
    })
    .catch((erro) =>
    {
      console.log("deu ruim");
     
      console.log(erro);
    })

  }
  private delete(id:any)
  {
    this.userService.delete(id)
    .then((user) =>
    {
      this.exibirMensagem("Usuário excluido com sucesso");
      this.router.navigateByUrl('view-user');
      
    })
    .catch((erro)=>
    {
      this.exibirMensagem("Erro ao excluir");
    })
  }

  bloquear(user:any)
  {
    user.status = false;

    this.userService.update(user)
    .then((user)=> 
    {
      console.log(user);
      this.exibirMensagem("Usuario bloqueado com sucesso");
    })
    .catch((erro) =>
    {
      console.log(erro);
    })
  }
  desbloquear(user:any)
  {
    user.status = true;

    this.userService.update(user)
    .then((user)=> 
    {
      console.log(user);
      this.exibirMensagem("Usuario desbloqueado com sucesso");
    })
    .catch((erro) =>
    {
      console.log(erro);
    })
  }

}
