import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {

  }
 


  public appPages = [
    { title: 'Pagina Inicial', url: 'folder', icon: 'home' },
    { title: 'Cadastro de Usuário', url: '/cad-user', icon: 'person-add' },
    { title: 'Cadastro de Estação', url: '/cad-estacao', icon: 'business' },
    { title: 'Adicionar Permissões', url: '/acessos', icon: 'add-circle' },
    { title: 'Visualizar Estações', url: '/view-estacoes', icon: 'list' },
    { title: 'Visualizar Usuários', url: '/view-users', icon: 'calendar-clear' },
    { title: 'Visualizar Acessos', url: '/view-acessos', icon: 'calendar-clear' },
   
  ];

  
  /*initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();


      this.authenticationService.authState.subscribe(state => {
        if (state) {
          this.router.navigate(['dashboard']);
        } else {
          this.router.navigate(['login']);
        }
      });

    });}*/
 
}

// PAGINA PRA LINKAR AS OUTRAS