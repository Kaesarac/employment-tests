let tamagotchi = 12;
let grana = 20;
let comprado = 0;
for(i = 1; i <= 12; i++){
    if(grana >= tamagotchi){
        comprado = comprado + 1;
        grana = grana - tamagotchi;
    }
    tamagotchi -= 1;
    console.log("Valor atual do Tamagotchi: R$" + (tamagotchi + 1))
}
console.log("Quantidade de Tamagotchis comprados com seu Dinheiro: "+comprado)