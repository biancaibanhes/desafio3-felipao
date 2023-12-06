class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = this.definirAtaque(); // Atribuir o ataque na criação do herói
    }

    definirAtaque() {
        if (this.tipo === "mago") {
            return "magia";
        } else if (this.tipo === "guerreiro") {
            return "espada";
        } else if (this.tipo === "monge") {
            return "artes marciais";
        } else {
            return "shuriken";
        }
    }

    escrever() {
        console.log(`O ${this.nome} atacou usando ${this.ataque}`);
    }
}

let heroi1 = new Hero("Luis", "38", "mago");
let heroi2 = new Hero("Leonardo", "1", "ninja");

heroi1.escrever();
heroi2.escrever();