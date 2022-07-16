const usuario = document.getElementById('usuario')
const password = document.getElementById('password')
const confirmar = document.getElementById('confirmar')
const mensaje = document.getElementById('mensaje')
const btnEnviar = document.getElementById('btnEnviar')
let valido = false 

const validar = () =>{
    if(password.value === confirmar.value){
        mensaje.innerHTML = '<span class="mensaje mensaje--correcto">password confirmado</span>'
        valido = true
    }else{
        mensaje.innerHTML = '<span class="mensaje mensaje--incorrecto">no coincide password</span>'
        valido = false
    }
}

btnEnviar.addEventListener('click', ()=>{
    if(usuario.value.trim() != '' && valido === true){
        alert(`¡¡¡Felicidades!!! ${usuario.value.toUpperCase()} tu registro fue correcto`)
        clear()
    }else{
        alert("valide su información")
        return false
    }
})

function clear(){
    usuario.value=''
    password.value=''
    confirmar.value=''
    mensaje.innerHTML = ''
}