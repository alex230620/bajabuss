// Validaciones para el login.
const userName = document.getElementById("userName");
const userPassword = document.getElementById("userPassword");
const formulario = document.getElementById("formulario");
const button = document.getElementById("button");
const alerta = document.getElementById("alerta");

const expRegUser = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const expRegPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

const mensajeSucces = () =>{
    alerta.classList.add("mensaje");
    alerta.style.color = "blue";
    alerta.textContent = "Datos correctos";
}
const mensajeError = () =>{
    alerta.classList.add("mensaje");
    alerta.style.color = "red";
    alerta.textContent = "Los campos no pueden ir vacios";
}
const validate = () =>{
    if(userName.value === "" || userPassword.value === ""){
        mensajeError();
        if(expRegUser.test(userName.value)){
            mensajeSucces();
        }else{
            mensajeError();
        }
     }else{
         mensajeSucces();
     }
}
formulario.addEventListener("submit", e =>{
    e.preventDefault();
    validate();
});

