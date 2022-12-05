import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthorizationService } from './services/authorization.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'cad-user',
    loadChildren: () => import('./pages/cad-user/cad-user.module').then( m => m.CadUserPageModule),
    canActivate: [AuthorizationService]
  },
  {
    path: 'cad-estacao',
    loadChildren: () => import('./pages/cad-estacao/cad-estacao.module').then( m => m.CadEstacaoPageModule),
    canActivate: [AuthorizationService]
  },
  {
    path: 'view-users',
    loadChildren: () => import('./pages/view-users/view-users.module').then( m => m.ViewUsersPageModule),
    canActivate: [AuthorizationService]
  },
  {
    path: 'view-estacoes',
    loadChildren: () => import('./pages/view-estacoes/view-estacoes.module').then( m => m.ViewEstacoesPageModule),
    canActivate: [AuthorizationService]
  },
  {
    path: 'acessos',
    loadChildren: () => import('./pages/acessos/acessos.module').then( m => m.AcessosPageModule),
    canActivate: [AuthorizationService]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    
  },
  {
    path: 'edit-user',
    loadChildren: () => import('./pages/edit-user/edit-user.module').then( m => m.EditUserPageModule),
    canActivate: [AuthorizationService]
  },
  {
    path: 'view-acessos',
    loadChildren: () => import('./pages/view-acessos/view-acessos.module').then( m => m.ViewAcessosPageModule),
    canActivate: [AuthorizationService]
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
