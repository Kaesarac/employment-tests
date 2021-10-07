let pastelSalgado = 0;//10
let pastelSalgado1 = 0;
let pastelDoce = 0;//7
let pastelDoce1 = 0;
let suco = 0;//12
let suco1 = 0;
var combinacaoPSS = 0;
var combinacaoPDS = 0;
var combinacaoPDPS = 0;
var combinacaoSS = 0;
var combinacaoPSPS = 0;
var combinacaoPDPD = 0;
for(i = 1; i <= 12; i++){
    //suco
    suco = i;
    for(j = 1; j <= 10; j++){
        //pastel salgado
        pastelSalgado = j;
        console.log("Pastel Salgado " + pastelSalgado + " + Suco " + suco)
        combinacaoPSS +=1
    }
    console.log("\n")
}
for(i = 1; i <= 12; i++){
    //suco
    suco = i;
    for(j = 1; j <= 7; j++){
        //pastel doce
        pastelDoce = j;
        console.log("Pastel Doce " + pastelDoce + " + Suco " + suco)
        combinacaoPDS +=1
    }
    console.log("\n")
}
for(i = 1; i <= 10; i++){
    //pastel salgado
    pastelSalgado = i;
    for(j = 1; j <= 7; j++){
        //pastel doce
        pastelDoce = j;
        console.log("Pastel Doce " + pastelDoce + " + Pastel Salgado " + pastelSalgado)
        combinacaoPDPS +=1
    }
    console.log("\n")
}
for(i = 1; i <= 12; i++){
    //suco
    suco = i;
    for(j = 1; j <= 12; j++){
        //suco
        suco1 = j + 1;
        console.log("Suco " + suco + " + Suco " + suco1)
        combinacaoSS +=1
    }
    console.log("\n")
}
for(i = 1; i <= 12; i++){
    //pastel doce
    pastelDoce = i;
    for(j = 1; j <= 12; j++){
        //pasteldoce1
        pastelDoce1 = j + 1;
        console.log("Pastel Doce" + pastelDoce + " + Pastel Doce " + pastelDoce1)
        combinacaoPDPD +=1
    }
    console.log("\n")
}
for(i = 1; i <= 12; i++){
    //pastel salgado
    pastelSalgado = i;
    for(j = 1; j <= 12; j++){
        //pastelSalgado1
        pastelSalgado1 = j + 1;
        console.log("Pastel Salgado" + pastelSalgado + " + Pastel Salgado " + pastelSalgado1)
        combinacaoPSPS +=1
    }
    console.log("\n")
}
console.log("Combinações Possíveis de Pastéis Salgados e Sucos = "+ combinacaoPSS)
console.log("Combinações Possíveis de Pastéis Doces e Sucos = "+ combinacaoPDS)
console.log("Combinações Possíveis de Pastéis Salgados e Pastéis Doces = "+ combinacaoPDPS)
console.log("Combinações Possíveis de Sucos e Sucos = "+ combinacaoPSS)
console.log("Combinações Possíveis de Pastéis Doces e Pastéis Doces = "+ combinacaoPDPD)
console.log("Combinações Possíveis de Pastéis Salgados e Pastéis Salgados = "+ combinacaoPSPS)