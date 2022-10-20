class Pessoa {
    name;
    idade;
    constructor(name, idade) {
        this.name = name;
        this.idade = idade;
    }
    toString() {
        return `Seu nome é ${this.name} e você tem ${this.idade}`;
    }
}
const kkphoenix = new Pessoa('Kauã Alves', 17);
console.log("Hello, bem vindo. Confira seus dados: " + kkphoenix + "?");
