
function findPairs(numero1, numero2){
    if(numero1 < 1 || numero1 > 100){
        return "Error: el primer numero esta fuera de rango";
    } else if (numero2 < 1 || numero2 > 100){
        return "Error: el segundo numero esta fuera de rango";
    } else if (numero1 > numero2){
        return "Error: el primer numero es mayor que el segundo";
    } else {
        let pares = [];
        for(let i = numero1; i <= numero2; i++){
            if(i % 2 === 0){
                pares.push(i);
            }
        }
        return pares;
    }
}

console.log(findPairs(50, 75));