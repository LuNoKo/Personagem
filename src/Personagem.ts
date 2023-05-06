export default class Personagem {
    constructor(
        public nome: string = "",
        public energia: number = 0,
        public vida: number = 0,
        public ataque: number = 0,
        public defesa: number = 0
    ) {}

    status(): string {
        return (
            '\nPersonagem:' +
            '\nNome => ' + this.nome  +
            '\nEnergia => ' + this.energia.toFixed(0)  +
            '\nAtaque => ' + this.ataque.toFixed(0)  +
            '\nDefesa => ' + this.defesa.toFixed(0)
        )
    }

    treinarAtacar(): void {
        this.ataque += Math.random() * 7;
        this.energia -= Math.random() * 10;

        if(this.ataque > 100){
            this.ataque = 0
        }
    }

    treinarDefesa(): void {
        this.defesa += Math.random() * 5;
        this.energia -= Math.random() * 10;
        
        if(this.defesa > 100){
            this.defesa = 0
        }
    }

    descansar(horas: number): void {
        this.energia += horas * (Math.random() * 10);
        if(this.energia < 100)
            this.energia = 100
    }

    batalhar(): number {
        let desgaste: number = Math.random() * 100;
        this.energia -= desgaste
        return desgaste
    }

    isDead(): boolean {
        return this.energia < 0
    }
}