const correo = document.getElementById("correo");
const alerta = document.getElementById("alerta");
const form = document.getElementById("form");

const expRegMail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const validar = () =>{
    if(correo.value === ""){
        alerta.classList.add("mensaje");
        alerta.style.color = "red";
        alerta.textContent = "Ingresa un email";
        if(expRegMail.test(correo.value)){   
            alerta.classList.add("mensaje");         
            alerta.style.color = "red";
            alerta.textContent = "Ingrese un correo valido";
        }else{
            alerta.classList.add("mensaje");         
            alerta.style.color = "blue";
            alerta.textContent = "Correo Enviado";
        }
    }
}
form.addEventListener ("submit", e =>{
    e.preventDefault();
   validar();
})