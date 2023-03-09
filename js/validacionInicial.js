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
const form = document.querySelector( "#pagoForm" );


form.addEventListener( "submit", ( event ) => {
    event.preventDefault();
    const name = document.querySelector( "#nameInput" ).value; 
    const nameInput = document.querySelector( "#nameInput" );
    
    if ( name === '' || name.value == null ) {
        setErrorFor(nameInput, 'No lo dejes en blanco mijo');
	} else {
		setSuccessFor(nameInput);
    }

    /*if ( messages.length > 0 ) {
        e.preventDefault();
        errorEl.innerText = messages.join( ', ' );
    }*/
    
} );

const input = document.querySelector("#nameInput"); // obtiene el input por su id

input.addEventListener('input', function() { // agrega un listener para el evento 'input'
  const regex = /^[a-zA-ZÁáÉéÍíÓóÚú\s]+$/; // expresión regular que solo acepta letras
  const valor = this.value; // obtiene el valor actual del input

  if (!regex.test(valor)) { // si el valor no cumple la expresión regular
      this.value = valor.slice( 0, -1 ); // elimina el último carácter del valor
    console.log( "Solo letras" );
    input.setAttribute( 'style', 'color: red;' );
  }
} );

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}


/*//const email = document.querySelector('#email').value.trim();
//const password = document.querySelector('#password').value.trim();
// Validacion errores
let errors = [];
if (name === '') {
    errors.push("Nombre completo, por favor");
}*/

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
    /*
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
}*/

/*function isValidEmail(email) {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}*/

