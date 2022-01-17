# Dicionário de typescript para marceneiros intelectuais

## Variáveis e types

Para declarar variáveis em typescript vamos fazer a mesma coisa que no js, mas vamos usar : type para declarar o tipo antes de declarar o valor dela, exemplo

~~~ts
var nome:string = "Kauã"
var number:number = 10;
~~~

## Classes em ts

## Comandos de configuração

* **"compilerOptions":{}**
  * "target": "version" =  a mesma coisa do [comando de terminal](#Comandos-de-terminal) **tsc (yourScript) --target "version"** e quando isso é feito, poderá usar *somente tsc* que ele vai compilar para a versão definida

## Comandos de terminal

* **tsc --version** = versão do typescript
* **tsc (yourScript)** = compila seu código para o ES4
* **tsc (yourScript) --target "version"** = compila seu código para a versão escolhida em "version"
  * **version = ESNEXT** = vai compilar seu código para a versão mais nova
  Nota: A de 2015 se escreve ES2015
* **--help** =  como em qualquer coisa, --help dá todas as flags do comando
