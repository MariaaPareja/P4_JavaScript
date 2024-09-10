
function generarContraseña(longitud, incluirMayusculas = true, incluirMinusculas = true, incluirNumeros = true, incluirSimbolos = true) {
    const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let caracteres = "";

    if (incluirMayusculas) caracteres += letrasMayusculas;
    if (incluirMinusculas) caracteres += letrasMinusculas;
    if (incluirNumeros) caracteres += numeros;
    if (incluirSimbolos) caracteres += simbolos;

    if (caracteres.length === 0) {
        alert("Debe incluir al menos un tipo de carácter.");
        return "";
    }

    let contraseña = "";
    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres[randomIndex];
    }

    return contraseña;
}

function generarYMostrarContraseña() {
    const longitud = parseInt(document.getElementById("longitud").value);
    const incluirMayusculas = document.getElementById("mayusculas").checked;
    const incluirMinusculas = document.getElementById("minusculas").checked;
    const incluirNumeros = document.getElementById("numeros").checked;
    const incluirSimbolos = document.getElementById("simbolos").checked;

    const contraseña = generarContraseña(longitud, incluirMayusculas, incluirMinusculas, incluirNumeros, incluirSimbolos);
    document.getElementById("contraseñaSalida").textContent = contraseña ? `Contraseña generada: ${contraseña}` : '';
}