import { BaseModel } from "src/app/modules/model/base-model";
//O cadastro de jogo deve conter as seguintes informações: título, descrição, data de
//lançamento, gênero(s) do jogo, desenvolvedora.
export class GameCadastro extends BaseModel {

    constructor() {
        super();
    }

    titulo?: string
    descricao?: string
    lancamento?: Date
    genero?: Array<GeneroIT>
    desenvolvedora?: string;
}
//• O cadastro de gêneros deve conter as seguintes informações: nome
export interface GeneroIT extends BaseModel {
    nome?: string
}