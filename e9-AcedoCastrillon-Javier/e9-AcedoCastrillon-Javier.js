function rot13(str) {
    

    return str.replace(/[A-Za-z]/g, function(letra) {
        return String.fromCharCode(
            letra.charCodeAt(0) + (letra.toLowerCase() < 'n' ? 13 : -13)
        );
    });
}

console.log(rot13("Ubyn Zhaqb")); 