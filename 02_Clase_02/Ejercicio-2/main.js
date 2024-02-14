// 2 - CINCO COLORES

// Se le pide al usuario que escoja un color(azul, verde, rojo, amarillo y violeta) y darle una respuesta en relación al color elegido.Ejemplo: "el azul es como el mar, siempre que el cielo sea azul (y sea de día)".Dar otra respuesta en el caso que NO elija ninguno de los colores anteriores.

let color = prompt("Ingrese el número correspondiente al color que se muestra a continuación:\n1. Azul\n2. Verde\n3. Rojo\n4. Amarillo\n5. Violeta ")

if (color == 1) {
    document.write('"El azul es como el mar, siempre que el cielo sea azul (y sea de día)"');

} else if (color == 2) {
    document.write('"Verde, que te quiero verde"');

} else if (color == 3) {
    document.write('"Rojos son tus labios y rojo tu corazón"');

} else if (color == 4) {
    document.write('"Amarillo como el sol, amarilla como la fruta de la pasión"');

} else if (color == 5) {
    document.write('"Flores quiero; Violetas como las orquídeas, violetas como las petunias"');
}
else {
    document.write("No hay un color asignado a ese número...")
}

