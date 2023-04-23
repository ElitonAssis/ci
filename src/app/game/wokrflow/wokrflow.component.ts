import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { GameCadastro } from '../model/game';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';
@Component({
  selector: 'app-wokrflow',
  templateUrl: './wokrflow.component.html',
  styleUrls: ['./wokrflow.component.scss']
})
export class WokrflowComponent implements OnInit {
  gameList: Array<GameCadastro> = []
  listaGame!: Map<string, Array<GameCadastro>>;
  constructor(
    private service: GameService,
    public dialog: MatDialog
  ) { }
  ngOnInit(): void {
    this.getAll();
  }

  async getAll() { await this.service.getAll().then(res => res.subscribe(r => this.listaGame = r as Map<string, Array<GameCadastro>>)) }

  openModal(obj: GameCadastro) {

    return this.dialog.open(EditComponent, {
      data: obj,
      width: "80vw",
      height: "80vh"
    },).afterClosed().subscribe(res => {
      this.getAll();
      //this.removeDeletado(this.listaGame, res)
    })
  }


  // private removeDeletado(lista: Map<string, Array<GameCadastro>>, deletadoId?: number) {
  //   return Object.entries(lista)
  //     .forEach(([key, value]) => Array.from(value)
  //       .forEach(obj => obj instanceof GameCadastro ? value.splice(value.findIndex(obj.id == deletadoId), 1) : null))
  // }
}
