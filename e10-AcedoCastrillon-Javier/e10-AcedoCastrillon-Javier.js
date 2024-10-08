function getMonthsAndDays(numeroMes) {
    const mesesDias = new Map([
        ['Enero', 31],
        ['Febrero', 28], // 29 en años bisiestos
        ['Marzo', 31],
        ['Abril', 30],
        ['Mayo', 31],
        ['Junio', 30],
        ['Julio', 31],
        ['Agosto', 31],
        ['Septiembre', 30],
        ['Octubre', 31],
        ['Noviembre', 30],
        ['Diciembre', 31]
    ]);

    if (numeroMes < 1 || numeroMes > 12 || isNaN(numeroMes)) {
        return 'ERROR: Mes inválido';
    }
    else{
        let keys = Array.from(mesesDias.keys())
        let mes = keys[numeroMes-1]
        
        return mesesDias.get(mes)
    }

}

let mes = prompt("Introduce el numero de un mes: ")
console.log(getMonthsAndDays(mes));