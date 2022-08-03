
let saldo = document.querySelector('#saldo');
let btnDep = document.querySelector('#btn-dep');
let btnRe = document.querySelector('#btn-re');
let inReDep = document.querySelector('#input-dep-re');

saldo.value = 10;

function decrementarSaldo(evento){
    console.log(evento)
    saldo.value = (saldo.value - inReDep.value);
    Swal.fire(
        'Haz retirado correctamete de tu cuenta',
        `${inReDep.value} Pesos`,
        'success'
    )
}

function incrementarSaldo(evento){
    console.log(evento)
    saldo.value = (parseInt(saldo.value) + parseInt(inReDep.value));
    Swal.fire(
        'Haz Depositado correctamete a tu cuenta',
        `${inReDep.value} Pesos`,
        'success'
    )
}


btnDep.addEventListener('click',incrementarSaldo);

btnRe.addEventListener('click',decrementarSaldo);

// Evento y funciones para el teclado de numeros

let arrayNumeros = document.querySelectorAll('.btn');
let btnDelete = document.querySelector('#btnReset')


arrayNumeros.forEach((boton) => {
    boton.addEventListener('click', () => {
    inReDep.value += boton.innerText;
    })
});

function borrarInput(evento){
    console.log(evento)
    inReDep.value = inReDep.value.substr(0,inReDep.value.length-1);
}

btnDelete.addEventListener('click', borrarInput)