import Personagem from "./Personagem"
import { Utils } from "../utils/Utils"

export class Priest extends Personagem{

    private _espirito: number
    private _versatilidade: number

    constructor(nome: string) {
        super(nome)
        this._espirito = Utils.randomizar(100, 1_000)
        this._versatilidade = Utils.randomizar(100, 1_000)
    }
}