import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GameService } from 'src/app/services/game.service';
import { GameCadastro, GeneroIT } from '../model/game';
import { response } from 'express';
import { ModalEditComponent } from './modal-edit/modal-edit.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  categorias!: Array<GeneroIT>
  constructor(
    public modalEdit: MatDialog,

    private service: GameService,
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GameCadastro,
    // public dialogConfig: MatDialogConfig
  ) { }
  ngOnInit(): void {
    console.log(this.data)
    this.getCategoriaList()
  }

  deleteObj() {
    if (!!this.data)
      this.service.deleteObj(this.data).then(res => {
        res.subscribe(response => {
          console.log(response)
        })
      })
  }
  async getCategoriaList() {
    if (!!this.data.id)
      this.service.getCategoriaList(this.data?.id).then(res => {
        res.subscribe(response => {
          console.log(response)
          this.categorias = response;
        })
      });
  }



  openModal() {
    this.data.categoriaEntityList = this.categorias;
    return this.modalEdit.open(ModalEditComponent, {
      data: this.data,
      width: "80vw",
      height: "80vh",
      disableClose: true

    },)
  }
}
