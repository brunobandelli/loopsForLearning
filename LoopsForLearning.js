/*LOOPs */

/*
Loop é uma estrutura de repetição no qual executa um comando, ou um bloco de comandos repetidamente.
As repetições do loop são chamadas de Iteraçõs.
Cada repetição que o loop executar, é uma iteração que ele esta executando, então se ele executou,
ele iterou uma sequencia, um bloco de comandos ou um comando só.

Os Loops são classificados entre DEFINIDOS E INDEFINIDOS.

DEFINIDOS: Quando eu SEI a quantidade de vezes que eu preciso REPETIR(que eu preciso ITERAR os comandos).
Conhecidos como: FOR, FOR IN E FOR OF.

INDEFINIDOS: Qunado eu NÃO SEI ao certo a quantidade de vezes que eu vou ITERAR um bloco de comandos.
Conhecidos como: WHILE E DO WHILE.

OBS: REPETIÇÃO DO LOOP = ITERAÇÃO DO LOOP,
CHAMAMOS DE ITERAÇÃO UMA EXECUÇÃO DE REPETIÇÃO DO LOOP.

AQUI IREMOS APRENDER SOBRE OS LOOPS DEFINIDOS.
*/


/*-------------------------------------------------------------------------------------------------------------------------------------------*/



/*

EXISTEM 3 TIPOS DE LOOP FOR:
FOR, FOR IN E FOR OF.

PRIMEIRAMENTE VAMOS DAR INTRUÇÃO AO LOOP FOR OF CLASSICO

*/



/*LOOP FOR */

/*
Para trabalhar com o Loop for, eu preciso de "3 configurações".

INICIALIZAÇÃO DA VARIAVEL DE CONTROLE(CONTADOR): Variavel com valor inicial, geralmente = 0.

CONDIÇÃO DE EXECUÇÃO: Oque vão avaliar se eu vou continuar executando meu loop ou não.

CONTROLE DA MINHA VARIAVEL DE CONTROLE(OU CONTADOR TABÉM): Podendo incrementar ou decrementar.


PERCEBA:
Tanto a INICIALIZAÇÃO DA VARIAVEL DE CONTROLE e CONTROLE DA MINHA VARIAVEL DE CONTROLE
podem serem chamadas de CONTADOR por que representam a variável que atua como um contador,
controlando o número de iterações do loop "for".


SINTAXE:



for (inicialização; condição; controle de incremento/decremento) {
  // Bloco de código a ser executado em cada iteração
}

sendo:

for (let i = 0; i < num; i++) {
  console.log("Número: " + i);
}


INICIALIZAÇÃO DA VARIAVEL DE CONTROLE: 
indice inicial.
let i = 0.


CONDIÇÃO DE EXECUÇÃO:
enquanto verdade.
i < num

CONTROLE DA MINHA VARIAVEL DE CONTROLE: 
contagem a cada iteração, incrementando ou decrementando minha variavel de controle.
i++



LEMBRANDO:
i++ 
É O MESMO QUE:
i=i+1
e
i+=1

*/


/*Exemplos For */ 


/*Exemplo 01*/

// console.log("Inicio do programa")
// for(let i=0; i< 10; i++){
//     console.log("Bruno - Valor da variavel i: indice - " + i)
     
// }
// console.log("Fim do programa")


/*Exempo 02 */

// for(let i=0; i < 100; i++){
//     if(i%2==0){
//         console.log(i + " é par")
//     }else{
//         console.log(i + " é impar")
//     }
// }





/*-----------------------------------------------------------------------------------------------------------------------------------------*/

/*LOOPs FOR IN E FOR OF*/

/*
Para facilitar iterações com o qual percorrem arrays ou objetos,
temos o FOR IN e o FOR OF.
*/

/*
Primeiramente para criar uma analogia, vamos utilziar o exemplo do FOR classico,
perceba que estamos percorrendo o array para executar a impressão no console
de cada elemento do array conforme a posição do indice. 
sendo:
i = indice
num = array

num.length irá medir o comprimento do array, que no caso é de 0 à 4
fazendo com que a condição de execução percorra o array todo.
*/

// let num=[10,20,30,40,50]

// for(let i=0; i < num.length; i++){
//     console.log(num[i])
// }


/*Com o FOR IN E FOR OF nós facilitamos esses casos aonde precisamos percorrer o array para realizar a iteração. */


/*
IMPORTANTE:
GERALMENTE O FOR IN É UM LOOP QUE É MAIS UTILIZADO EM OBJECTS
E O LOOP FOR OF EM ARRAYS.
EM AMBOS OS CASOS, O FOR TRADICIONAL É UTIL PARA AMBOS OS CASOS.


Vejamos abaixo os seus exemplos:
*/


/*-------------------------------------------------------------------------------------------------------------------------------------------*/

/*LOOP FOR IN*/

/*
SINTAXE:

ARRAYS: for(let Controle in Array){}
ou
OBJECTS: for(let Controle in Object){}


Sendo: 

let Controle - Variavel de controle, onde em:
ARRAYS: Onde receberá cada indice do array.
OBJECTS: Onde receberá cada chave do object.


Array - Array a ser percorrido.

Object - Objeto a ser percorrido.



IMPORTANTE:
O loop "for in" é mais adequado para percorrer propriedades de objetos, 
e não para iterar sobre elementos de um array.
Embora seja possível utilizá-lo para percorrer um array, 
ele pode causar problemas em algumas situações, 
especialmente se o array tiver propriedades adicionais além dos índices numéricos.

Para iterar sobre elementos em um array, o loop "for of" ou o loop "for" tradicional são mais indicados.

*/




/*Exemplo: For in (Arrays)*/

/*
Ao utilizar o loop "for in" para iterar sobre um array,
eu vou criar a variável "índice" representando o índice de cada elemento no array.  
Sendo assim, será alterada a variavel a cada iteração,
imprimindo cada elemento do array, conforme a posição do indice dentro do array.
*/



// let array=[10,20,30,40,50]


// for(indice in array){
//     console.log(array[indice])
// }





/*Exemplo: For in (Object) */

/*
Ao utilizar o loop "for in" para iterar sobre um Object,
eu vou criar a variável "Chave" representando a chave de cada valor no Object.  
Sendo assim, será alterada a variavel a cada iteração,
imprimindo cada valor do Object, conforme a posição da chave dentro do Object.
*/


// const ObjectCarro = {
//     marca: "Toyota",
//     modelo: "Corolla",
//     ano: 2020
// };

// for ( chave in ObjectCarro) {
//     console.log(chave + ": " + ObjectCarro[chave]);
// }





/*-----------------------------------------------------------------------------------------------------------------------------------------*/

/*LOOP FOR OF*/

/*
É usado para iterar sobre valores em objetos iteráveis, como strings, arrays, mapas, conjuntos, entre outros.

IMPORTANTE:
um objeto não é considerado um objeto iterável por padrão.
Embora os objetos em JavaScript sejam objetos em si, eles não são iteráveis e, 
portanto, não podem ser diretamente percorridos usando o loop "for of".

Para percorrer as propriedades de um objeto em JavaScript, você pode utilizar o loop "for in" ou o loop "for" tradicional.


SINTAXE:

for(let controle of array){
    console.log()
}

Onde:

let controle: variavel de controle que recebera o elemento do array.

array: Array a ser percorrido.


Então:
A variável de controle é a variável que assume o valor de cada elemento do array em cada iteração do loop.
A cada passo do loop, a variável controle recebe o valor do próximo elemento do array,
permitindo que você acesse diretamente o valor do elemento no bloco de código do loop.

OBS:
O loop "for of" não retorna diretamente o índice do array durante a iteração. 
O objetivo do "for of" é iterar diretamente sobre os valores do objeto iterável,
não os índices ou chaves.
*/

/*
Ao utilizar o loop "for of" para iterar sobre o array,
eu vou criar a variável "element" representando cada elemento do array.  
Sendo assim, será alterada a variavel a cada iteração,
imprimindo diretamente cada elemento do array.
*/

/*Exemplo for of*/

// let array = [10,20,30,40,50]

// for(element of array){
//     console.log(element)
// }

/*-------------------------------------------------------------------------------------------------------------------------------------------*/

/*EXEMPLO UTILIZANDO O DOM - FOR OF E FOR IN*/

// const objs = document.getElementsByTagName("div")


// for(o of objs){                                         
//     console.log(o.innerHTML="Curso")    // RETORNARÁ OS ELEMENTOS DO ARRAY E ALTERA O INNERHTML DA DIV.
// }

// for(o in objs){                                        
//     console.log(objs[o].innerHTML)      // RETORNARÁ OS ELEMENTOS CONFORME O INDICE E ALTERA O INNERHTML DA DIV E ALGUMAS PROPRIEDADES EXTRAS.
//     // console.log(o)                   // RETORNARÁ OS INDICES E ALGUMAS PROPRIEDADES EXTRAS.
// }

/* No caso do for in, tem uma pecularidade, no qual retornar length, item e namedItem no console,
isso acontece por que 

Para arrays, que são objetos com índices numéricos, o loop "for in" irá percorrer todas as chaves enumeráveis do objeto, 
incluindo os índices numéricos e quaisquer outras propriedades que possam existir no objeto, sejam elas herdadas ou adicionadas manualmente.

No caso de um array, você obteria algumas propriedades adicionais, como:

length: Representa o número de elementos no array. Por exemplo, 
se você tiver um array com 3 elementos, array.length será igual a 3.

item: Isso pode ser um pouco confuso, mas alguns navegadores mais antigos podem retornar "item" como uma propriedade em um array-like. 
Essa propriedade não é padrão e não é suportada em todos os navegadores modernos.

namedItem: Semelhante ao "item", essa propriedade também pode ser retornada por navegadores mais antigos, 
mas não é padrão e não é amplamente suportada.


Quando você imprime objs[o].innerHTML, está acessando a propriedade innerHTML de cada item no objeto objs. 
Portanto, o loop está percorrendo todas as propriedades enumeráveis do objeto, 
incluindo as propriedades padrão do array (como "length") e as propriedades específicas de coleções HTML (como "item" e "namedItem"), 
o que acaba sendo exibido no console.

IMPORTANTE:
Para evitar esse comportamento indesejado ao iterar sobre arrays, 
é recomendado usar o loop "for of" em vez do "for in". 
O loop "for of" foi projetado especificamente para percorrer elementos de coleções, como arrays,
e evita problemas com propriedades adicionais.

No entanto, se você deseja iterar apenas sobre os índices numéricos de um array, 
você pode usar o loop "for" tradicional.

Usar o loop "for of" ou o loop "for" tradicional é geralmente mais seguro e direto ao iterar sobre os elementos de um array, 
especialmente se você quiser evitar propriedades adicionais indesejadas.
*/