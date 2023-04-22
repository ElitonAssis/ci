import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { GeneroIT } from '../game/model/game';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor(
    private http: HttpService
  ) { }
  async sendData(obj: GeneroIT) {
    return this.http.post(`/genero/cadastro-genero`, obj);
  }
  async getAll() {
    return this.http.get(`/genero/get-all`);
  }

  //setar deletado como true para manter dados como "backup"
  //criar job para deletar todos que deletado=true, data atual 5dias > dataAtualizacao
  async deleteObj(id: number) {
    return this.http.get(`/genero/delete/${id}`);
  }
}
