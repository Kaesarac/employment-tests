//Augusto Cesar / 2. Faça um programa que exiba a sequência 8, 4, 12, 6, 18… até 100.

var array1 = [] //armazena os números a serem somados
var array2 = [] //armazena o número inicial e os resultados da soma
let adicionar;
adicionar = array1.push(4);//adiciona o número base
//laço de repetição que incrementa a base do Array1 de 2 em 2
for(i = 0; i < 8; i++){
	let posicao = array1[i] + 2;
    adicionar = array1.push(posicao);
}
//console.log(array1)
adicionar = array2.push(8);//adiciona o número base
//laço de repetição que incrementa a base do Array2 de acordo ao index do Array1
for(j = 0; j < 8; j++){
    let posicao = array2[j] + array1[j]
    adicionar = array2.push(posicao)
}
//laço de repetição que imprime os números presentes nos Arrays de acordo ao index
for(a = 0; a < 9; a++){
    console.log(array1[a] + ", " + array2[a]);
}

    