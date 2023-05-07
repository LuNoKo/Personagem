import Personagem from "./Personagem"
import { Utils } from "../utils/Utils"

export class Warrior extends Personagem{

    private _forca: number
    private _agilidade: number

    constructor(nome: string) {
        super(nome)
        this._vidaAtual = 100
        this._forca = Utils.randomizar(100, 10_000)
        this._agilidade = Utils.randomizar(100, 10_000)
    }
}