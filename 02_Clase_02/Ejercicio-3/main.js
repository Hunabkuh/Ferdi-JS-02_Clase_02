
let respuesta = prompt("¿La lámpara enciende?, Responda con la letra 'S' si funciona y con la 'N' si no funciona: ");

if (respuesta == 'N') {
    let respuesta = prompt("¿Está enchufada?, Responda con 'S' en caso afirmativo y con 'N' en caso negativo: ");

    if (respuesta == 'N') {
        document.write("Proceda a enchufarla.");
    }
    else if (respuesta == 'S') {
        let respuesta = prompt("¿Tiene el foco quemado?, Responda con 'S' en caso afirmativo y con 'N' en caso negativo: ");

        if (respuesta == 'S') {
            document.write("Reemplace el foco.");
        }
        else {
            document.write("Compre una nueva lámpara.");
        }
    }

}
else {
    document.write("Disfrute su lámpara.")
}