import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MaterialModule } from '../modules/material/material.module';
import { GeneroComponent } from './genero/genero.component';
import { WokrflowComponent } from './wokrflow/wokrflow.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    CadastroComponent,
    GeneroComponent,
    WokrflowComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    MaterialModule,
    SlickCarouselModule,

  ]
})
export class GameModule { }
