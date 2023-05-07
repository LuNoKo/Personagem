import PersonagemNew from "./PersonagemNew";
import { Utils } from "./Utils";

export class Mage extends PersonagemNew{

    private _intelecto: number
    private _velocidade: number

    constructor(nome: string) {
        super(nome)
        this._intelecto = Utils.randomizar(100, 1_000)
        this._velocidade = Utils.randomizar(10, 2_000)
    }
}