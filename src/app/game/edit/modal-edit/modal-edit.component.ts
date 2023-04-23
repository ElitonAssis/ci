import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GameService } from 'src/app/services/game.service';
import { GameCadastro, GeneroIT } from '../../model/game';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { GeneroComponent } from '../../genero/genero.component';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {
  formulario!: FormGroup;
  game!: GameCadastro;
  constructor(
    private formbuilder: FormBuilder,
    private _bottomSheet: MatBottomSheet,
    private service: GameService,
    public dialogRef: MatDialogRef<ModalEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GameCadastro,
  ) { }

  ngOnInit(): void {
    this.createForm();
    console.log(this.data)
  }

  createForm() {
    this.formulario = this.formbuilder.group({
      titulo: [this.data?.titulo || '', [Validators.required, Validators.pattern(/^[^!@#$%¨&*]+$/)]],
      descricao: [this.data?.descricao || '', [Validators.required, Validators.pattern(/^[^!@#$%¨&*]+$/)]],
      lancamento: [this.formatDate(), [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]],
      categoriaEntityList: [this.data?.categoriaEntityList || [], Validators.required],
      desenvolvedora: [this.data?.desenvolvedora || '', [Validators.required, Validators.pattern(/^[^!@#$%¨&*]+$/)]]
    })
  }
  private formatDate() {
    if (!!this.data.lancamento) {
      const data = new Date(this.data.lancamento)
      const dataFormatada = `${data.getFullYear()}-${(data.getMonth() + 1).toString().padStart(2, '0')}-${data.getDate().toString().padStart(2, '0')}`;
      return dataFormatada;
      // return this.data.lancamento.toLocaleDateString('pt-BR');
    }
    return '';
  }

  openBottomSheet(): void {
    this._bottomSheet.open(GeneroComponent).afterDismissed().subscribe(result => {
      if (result === undefined) return;

      this.preencheFormGenero(this.clearArray(result));
    });
  }
  clearArray(array: Array<GeneroIT>): Array<GeneroIT> {

    let form: Array<GeneroIT> = this.formulario.value?.categoriaEntityList;
    form.forEach(obj => array.splice(array.findIndex(ele => ele.id === obj.id), 1));
    return array;
  }

  private preencheFormGenero(array: Array<GeneroIT>) {
    return this.formulario.get('categoriaEntityList')?.setValue([...this.formulario.value.categoriaEntityList, ...array]);
  }

  removeFromArray(id: number) {
    const lista: Array<GeneroIT> = this.formulario.value?.categoriaEntityList;

    this.service.removeCategory({ gameId: this.data.id, categoriaId: id }).then(res => {
      res.subscribe((response) => {
        if (!res) return;
        console.log(res);
        lista.splice(lista.findIndex(ele => ele['id'] == id), 1)
        return this.formulario.get('categoriaEntityList')?.setValue(this.formulario.value?.categoriaEntityList);
      })
    })
  }

  sendData() {
    if (this.formulario.invalid) return;
    if (new Date(this.formulario.value.lancamento as Date || new Date()).getDate().toLocaleString() === new Date().getDate().toLocaleString()) return console.log('data invalida')
    console.log({ ...this.formulario.value, ...this.game } as GameCadastro)
    const game: GameCadastro = { ...this.formulario.value, ...this.game }

    return this.service.sendData(game).then(res => {
      res.subscribe(response => {
        if (response.error) return console.log(response, 'erro')
        this.formulario.reset();
        return console.log(response, '2');
      })
    });
  }

  close() { return this.dialogRef.close() }
}
