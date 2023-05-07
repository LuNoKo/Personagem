import { Utils } from "./Utils";

export default class PersonagemNew {

    private _nome: string
    private _armadura: number
    private _vidaMaxima: number
    protected _vidaAtual: number

    constructor(nome: string) {
        this._nome = nome,
        this._armadura = Utils.randomizar(1_000, 10_000)
        this._vidaMaxima = Utils.randomizar(200, 10_000)
        this._vidaAtual = Utils.randomizar(40, this._vidaMaxima)
    }
}