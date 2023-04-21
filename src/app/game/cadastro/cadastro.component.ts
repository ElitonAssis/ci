import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameCadastro } from '../model/game';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  game = new GameCadastro();
  formulario!: FormGroup;
  constructor(
    private formbuilder: FormBuilder
  ) { }

  ngOnInit(): void {

  }
  sendData() {
    if (this.formulario.invalid) return;
    if (new Date(this.formulario.value.lancamento as Date || new Date()).getDate().toLocaleString() === new Date().getDate().toLocaleString()) return console.log('data invalida')



  }

  createForm() {
    this.formulario = this.formbuilder.group({
      titulo: ['', [Validators.required, Validators.pattern(/^[^!@#$%¨&*]+$/)]],
      descricao: ['', [Validators.required, Validators.pattern(/^[^!@#$%¨&*]+$/)]],
      lancamento: ['', Validators.required],
      genero: [[], Validators.required],
      desenvolvedora: ['', [Validators.required, Validators.pattern(/^[^!@#$%¨&*]+$/)]]
    })
  }
}
