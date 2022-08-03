
let nombre = document.querySelector('#text-up');
let emailRegis = document.querySelector('#email-up');
let passwordRegis = document.querySelector('#password-up');
let btnRegister = document.querySelector('#btn-regis');
let parrafo2 = document.querySelector('#alerta2');

let ls = localStorage;




btnRegister.addEventListener('click', () => {
    let alerta2 = "";
    
    if (regexEmail.test(emailRegis.value) === true && regexPass.test(passwordRegis.value) === true) {
        let userObj = new CreateUsers(nombre.value,emailRegis.value,passwordRegis.value);
        ls.setItem(`${userObj.nameUser}`, JSON.stringify(userObj));
        alerta2 += `Te has registrado correctamente <br>`
        parrafo2.innerHTML = alerta2;
        nombre.classList.toggle('colorVerde');
        emailRegis.classList.toggle('colorVerde');
        passwordRegis.classList.toggle('colorVerde')

    }else{
        alerta2 +=`El email o la contraseña que ingresaste no es valida <br>`
        parrafo2.innerHTML = alerta2;
        nombre.classList.toggle('colorRed');
        emailRegis.classList.toggle('colorRed');
        passwordRegis.classList.toggle('colorRed')
    }

})

class CreateUsers{
constructor(nameUser,email,password){
    this.nameUser = nameUser;
    this.email= email;
    this.password = password;
    this.cash = 10;
}
}


//Evento iniciar sesion

let inNombre = document.querySelector('#text-in')
let inEmail = document.querySelector('#email-in');
let inPassword = document.querySelector('#password-in');
let btnIn = document.querySelector('#btn-in');


let regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
let p = document.querySelector('.alerta');
let regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm; /*- Al menos 8 carácteres
- debe contener al menos 1 letra mayúscula, 1 letra minúscula y 1 número
- Puede contener caracteres especiales*/


btnIn.addEventListener('click', () =>{
    
    let alert = "";
    let entrar = false;
    let entrar2 = false;
    if(regexEmail.test(inEmail.value) === true && regexPass.test(inPassword.value) === true){
        if (ls.getItem(inNombre.value) !== null) {
            let user = JSON.parse(ls.getItem(inNombre.value));
            console.log(user)
            if (inEmail.value === user['email'] && inPassword.value === user['password']) {
                console.log("iniciaste sesion")
                window.location.href = "pageBank/indexBank.html";
            }else{
                alert += `El email o la contraseña no son correctos <br>`
                entrar = true;
            }
        }else{
            alert += `Este Usuario no existe <br> Por Favor Registrate`
            entrar2 = true
        }
    }else{
        alert += `El email no es valido  <br> La contraseña no es valida <br>`;
        entrar = true;
    } 

    if(entrar){ 
        p.innerHTML = alert;
        inEmail.classList.toggle('colorRed')
        inNombre.classList.toggle('colorRed')
        inPassword.classList.toggle('colorRed')

    } 
    if (entrar2) {
        p.innerHTML = alert;
        inNombre.classList.toggle('colorRed')
    }

})

