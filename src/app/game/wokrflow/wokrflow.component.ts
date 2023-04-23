import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { GameCadastro } from '../model/game';
import { CadastroComponent } from '../cadastro/cadastro.component';

@Component({
  selector: 'app-wokrflow',
  templateUrl: './wokrflow.component.html',
  styleUrls: ['./wokrflow.component.scss']
})
export class WokrflowComponent implements OnInit {
  gameList: Array<GameCadastro> = []
  listaGame!: Map<string, Array<GameCadastro>>;
  constructor(
    private service: GameService
  ) { }
  ngOnInit(): void {
    console.log('sdaaaaaaaaaaaaaaaaaaaaaaaaaa')
    this.getAll();
  }
  carouselConfig = {
    infinite: true,
    /* outras configurações do Slick Carousel */
  };

  async getAll() {

    await this.service.getAll().then(res => {
      res.subscribe(r => {
        this.listaGame = r as Map<string, Array<GameCadastro>>;
        console.log(this.listaGame);
      })
    })
  }
}
