
import { Mage } from "./src/Mage";
import { Priest } from "./src/Priest";
import { Warrior } from "./src/Warrior";
import PersonagemOld from "./src/Old/PersonagemOld";
import Personagem from "./src/Personagem";
import prompt from "prompt-sync";

let personagem : PersonagemOld = new PersonagemOld("Sansa Stark", 100, 40, 20, 20)
let teclado = prompt()
let option: number = 0

while(option != 9 || personagem.isDead()){
    console.log("\n+========= Personagem =============+")
    console.log("| 1. Treinar ataque                  |")
    console.log("| 2. Treinar defesa                |")
    console.log("| 3. Descansar                     |")
    console.log("| 4. Entrar em batalha             |")
    console.log("| 8. Imprimir atributos            |")
    console.log("| 9. Sair                          |")
    console.log("+==================================+")

    option = +teclado('\nEscolhar uma ação: ')

    switch (option) {
        case 1:
            personagem.treinarAtacar()
            console.log(personagem.status())
            break;
        case 2:
            personagem.treinarDefesa()
            console.log(personagem.status())
            break;
        case 3:
            let horas: number = +teclado("Digite o número de horas: ")
            personagem.descansar(horas)
            console.log(personagem.status())
            break;
        case 4:
            let desgaste: number = personagem.batalhar()
            console.log(`Esta batalha custou ${desgaste}`);
            console.log(personagem.status())
            break;
        case 8:
            console.log(personagem.status())
            break;
        default:
            break;
    }
}

if(personagem.isDead()){
    console.log('\nOps! Você morreu!!\n')
}else{
    console.log('\n Ótimo! Até mais...\n')
}

let mage: Personagem = new Mage("Lucas Mage")
let warrior: Personagem = new Warrior("Lucas Mage")
let priest: Personagem = new Priest("Lucas Mage")

console.log(mage);
console.log(warrior);
console.log(priest);