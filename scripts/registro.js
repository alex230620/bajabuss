
const correoRegistro = document.getElementById("correoRegistro");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const telefono = document.getElementById("telefono");
const fechaNacimiento = document.getElementById("fechaNacimiento");
const terminos = document.getElementById("terminos");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("formRegistro");

// expresiones regulares para validar campos.
const regNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regNumber = /^([0-9])*$/;
const regFecha =  /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
const regMail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;


const mensajeExitoso = () => {
    mensaje.classList.add("mensaje");
    mensaje.textContent = "!Todos los datos se han enviado correctamente!";
    mensaje.style.color = "green";
}

const mensajefalied = () =>{
    mensaje.classList.add("mensaje");
    mensaje.style.color = "red";
}
const validar = () =>{
    if(!regMail.test(correoRegistro.value)){
        mensajefalied().textContent = "Correo no valido";
    }
    if(!regNombre.test(nombre.value) && !regNombre.test(apellidos.value)){
        mensajefalied().textContent = "Solo letras";
    }
    if(!regNumber.test(telefono.value)){
        mensajefalied().textContent = "Solo se permiten numeros";
    }
    if(!regFecha.test(fechaNacimiento.value)){
        mensajefalied().textContent = "Ingresa una fecha de nacimiento valida";
    }
    if(!terminos.value === false){
        mensajefalied().textContent = "Debes de aceptar los terminos y condiciones";
    }
    mensajeExitoso();
}

form.addEventListener("submit", e =>{
    validar();
})