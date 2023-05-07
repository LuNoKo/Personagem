import PersonagemNew from "./PersonagemNew"
import { Utils } from "./Utils"

export class Priest extends PersonagemNew{

    private _espirito: number
    private _versatilidade: number

    constructor(nome: string) {
        super(nome)
        this._espirito = Utils.randomizar(100, 1_000)
        this._versatilidade = Utils.randomizar(100, 1_000)
    }
}