import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { GeneroComponent } from './genero/genero.component';
import { WokrflowComponent } from './wokrflow/wokrflow.component';

const routes: Routes = [
  { path: "flow", component: WokrflowComponent },
  { path: "game-cadastro", component: CadastroComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
