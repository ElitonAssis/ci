import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { GeneroComponent } from './genero/genero.component';

const routes: Routes = [
  { path: "game-cadastro", component: CadastroComponent },
  { path: "genero-cadastro", component: GeneroComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
