const correo = document.getElementById("correo");
const alerta = document.getElementById("alerta");
const form = document.getElementById("form");

const expRegMail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const mensajeSucces = () =>{
    alerta.classList.add("mensaje");
    alerta.style.color = "blue";
    alerta.textContent = "!El correo se ha enviado correctamente!";
}
const mensajeError = () =>{
    alerta.classList.add("mensaje");
    alerta.style.color = "red";
    alerta.textContent = "!Correo invalido, intenta de nuevo!";
}

const validar = () =>{
   if(expRegMail.test(correo.value)){
       mensajeSucces();
   }else{
       mensajeError();
   }
}
form.addEventListener ("submit", e =>{
    e.preventDefault();
   validar();
})