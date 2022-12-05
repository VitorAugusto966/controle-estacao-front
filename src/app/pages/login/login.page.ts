import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public users:any[] = [];
  public email:string;
  public senha:string;

  constructor(private http:HttpClient, 
              private router: Router,
              private toastController: ToastController,
             private authService: AuthenticationService) { }

  ngOnInit() {
  }

  

  limpar()
  {
    this.email = "";
    this.senha = "";
  }
  private async exibirMensagem(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }

  async login(){

    const usuario = {
      email: this.email,
      senha:this.senha
    }
    const retorno = await this.authService.login(usuario);
    
    if (retorno) {
      console.log('Login OK');
      this.router.navigateByUrl('folder/');
    } else {
      console.log('Login failed.');
      this.exibirMensagem("Erro: email ou senha inválido.");
    }
  }
  }

  



