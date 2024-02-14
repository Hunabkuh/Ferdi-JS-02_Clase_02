// 1 - ENTRADA DISCOTECA

// A la entrada a una discoteca, se pregunta al cliente qué edad tiene.

// Darle una respuesta diferente si la edad es mayor, menor o igual a 18 años.

let edad = parseInt(prompt("Bienvenido a la página de la Discoteca Palladium, por favor ingresa tu edad: "));

if (edad >= 18) {
    document.write("Adelante, disfruta de la página.");

} else {
    document.write("Lo sentimos, los menores de edad no pueden ingresar a la web.");
}

