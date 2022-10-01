let livro : {
	autor: string,
	nome: string,
	codigoDeBarra: number,
	paginas?: number,
} 

livro = {
    autor: "Kauã",
    nome: "Contos em Midkemia",
    codigoDeBarra: 131212312312131
}

interface ILivros {
	autor: string;
	nome: string;
	codigoDeBarra: number;
	paginas?: number;
}

let object1 :ILivros = {
	autor: "Kauã",
    nome: "Contos em Midkemia",
    codigoDeBarra: 131212312312131
}

let object3 :ILivros;

console.table(object1)
