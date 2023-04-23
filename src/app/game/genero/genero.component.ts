import { Component, OnInit } from '@angular/core';
import { GeneroIT } from '../model/game';
import { GeneroService } from 'src/app/services/genero.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { SnackService } from 'src/app/services/snack.service';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.scss']
})
export class GeneroComponent implements OnInit {
  list!: Array<GeneroIT>;
  formulario!: FormGroup
  ret: Array<GeneroIT> = []
  ngOnInit(): void {
    this.createForm();
    this.getAll();

  }
  constructor(
    private service: GeneroService,
    private formBuilder: FormBuilder,
    private _bottomSheetRef: MatBottomSheetRef<GeneroComponent>,
    private snack: SnackService
  ) { }

  createForm() {
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.pattern(/^[^~!@#$%^&*()_+\-={}[\]|\\:;"'<>,.?/]*$/)]]
    })
  }

  async newGender() {
    if (this.formulario.invalid) return;
    console.log(this.formulario.value)
    await this.service.sendData(this.formulario.value as GeneroIT).then(res => {
      res.subscribe(response => this.snack.open(response.message, "verde"))
    }).finally(() => this.formulario.get('nome')?.setValue(""));
  }

  async getAll() {
    await this.service.getAll().then(res => res.subscribe(response => {
      if (response.error) return;
      return this.list = response;
    })
    )
  }

  async deleteOflist(id: number | undefined) {
    if (id === undefined) return;

    await this.service.deleteObj(id).then(res => {
      res.subscribe(response => this.snack.open(response.message, "verde"))
    }).finally(() => this.getAll());
  }

  selectGenders(obj: GeneroIT) { return this.includes(obj) ? this.ret.splice(this.ret.findIndex(ele => ele.id === obj.id), 1) : this.ret.push(obj) }

  includes(obj: GeneroIT): boolean { return this.ret.some(element => element.id === obj.id) }

  close() {
    console.log(this.ret)
    return this._bottomSheetRef.dismiss(this.ret)
  }
}
