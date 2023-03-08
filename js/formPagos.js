// INICIA FUNCION BOTON CONTADOR DE PRODUCTOS
const btnContadorSuma = document.querySelector( ".buttonMax" );
const btnContadorResta = document.querySelector( ".buttonMinus" );
const contadorSpan = document.querySelector( ".contadorProduct" );

let contador = 1;

btnContadorSuma.addEventListener("click", () => {
    contador++
    contadorSpan.textContent = contador
} );

btnContadorResta.addEventListener("click", () => {
    
    contador--
    if ( contador < 0 ) {
        contador = 0
    }
    contadorSpan.textContent = contador
} );
// TERMINA FUNCION BOTON CONTADOR

//INICIA FUNCION NAME FORM
const form = document.querySelector('#pagoForm');

form.addEventListener('submit', function(event) {
event.preventDefault();

const name = document.querySelector('#nombre').value.trim();
//const email = document.querySelector('#email').value.trim();
//const password = document.querySelector('#password').value.trim();

  // Validacion errores
let errors = [];
if (name === '') {
    errors.push('Nombre completo, por favor');
}

/*
if (email === '') {
    errors.push('Email is required');
} else if (!isValidEmail(email)) {
    errors.push('Email is not valid');
}*/


/*if (password === '') {
    errors.push('Password is required');
} else if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
}*/
    
if (password === '') {
    errors.push('Password is required');
} else if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
}

if (errors.length > 0) {
    const errorList = document.createElement('ul');
    errors.forEach(function(error) {
const errorItem = document.createElement('li');
errorItem.textContent = error;
errorList.appendChild(errorItem);
    });

    const errorDiv = document.createElement('div');
    errorDiv.classList.add('alert', 'alert-danger');
    errorDiv.appendChild(errorList);

    const formGroup = document.querySelector('.form-group');
    formGroup.insertBefore(errorDiv, formGroup.firstChild);
} else {
    // Los valores son válidos, puedes procesarlos aquí
    alert('Form submitted');
}
});

/*function isValidEmail(email) {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}*/

