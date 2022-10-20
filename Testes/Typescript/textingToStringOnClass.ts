class Pessoa{

    name: string
    idade :number

    constructor(name: string, idade: number){
        this.name = name
        this.idade = idade
    }

    toString() :string{
        return `Seu nome é ${this.name} e você tem ${this.idade}`
    }
}

const kkphoenix = new Pessoa('Kauã Alves', 17)

console.log( "Hello, bem vindo. Confira seus dados: " + kkphoenix + "?" )
