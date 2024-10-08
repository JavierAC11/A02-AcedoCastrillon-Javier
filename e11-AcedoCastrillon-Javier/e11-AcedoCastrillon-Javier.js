function lanzarDados() {
    var dado1 = Math.floor(Math.random() * 6) + 1;
    var dado2 = Math.floor(Math.random() * 6) + 1;

    return [dado1, dado2];
}

let dados = [0, 0, 0, 0, 0, 0]
for (let i = 0; i < 36000; i++) {
    let lanzamiento = lanzarDados();
    lanzamiento.forEach(dado => {
        dados[dado - 1]++;
    });
}

dados.forEach((dado, index) => {
    console.log(`El número ${index + 1} ha salido ${dado} veces`);
})
