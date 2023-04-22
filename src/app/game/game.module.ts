import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MaterialModule } from '../modules/material/material.module';
import { GeneroComponent } from './genero/genero.component';


@NgModule({
  declarations: [
    CadastroComponent,
    GeneroComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    MaterialModule
  ]
})
export class GameModule { }
