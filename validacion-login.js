const user = document.getElementById('user');
const pass = document.getElementById('pass');
const submit = document.getElementById('submit');
const bad = document.getElementById('bad');

submit.addEventListener('click', (e)=> {
    if (user.value.length < 1 && pass.value.length < 1) {
        document.getElementById('bad').textContent = "Porfavor complete todos los campos"
        e.preventDefault()
    }else if (user.value.length <= 5) {
        document.getElementById('bad').textContent = "Usuario no valido"      
        e.preventDefault()
    }else if (pass.value.length <= 5) {
        document.getElementById('bad').textContent = "Contraseña no valido"      
        e.preventDefault()
    }else if (user.value.length >= 5 && pass.value.length > 6){
        document.getElementById('bad').textContent = "Ok"      
    }

    setTimeout(() => {
        bad.textContent = ""
    }, 3000);
})