import PersonagemNew from "./PersonagemNew"
import { Utils } from "./Utils"

export class Warrior extends PersonagemNew{

    private _forca: number
    private _agilidade: number

    constructor(nome: string) {
        super(nome)
        this._vidaAtual = 100
        this._forca = Utils.randomizar(100, 10_000)
        this._agilidade = Utils.randomizar(100, 10_000)
    }
}