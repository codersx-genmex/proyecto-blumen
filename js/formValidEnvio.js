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

//INICIA FUNCIONES A FORM ENVIO
const form = document.getElementById( 'form' );
const direccionNum = document.getElementById('direccionNum');
const streetName = document.getElementById( 'streetName' );
const codigoPostal = document.getElementById( 'cp' );

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const direccionNumValue = direccionNum.value.trim();
	const streetNameValue = streetName.value.trim();
	const codigoPostalValue = cp.value.trim();
	
	
	if(direccionNumValue  === '') {
		setErrorFor(direccionNum, 'Introduzca un número de calle');
	} else {
		setSuccessFor(direccionNum);
	}

	if(streetNameValue  === '') {
		setErrorFor(streetName, 'Introduzca su dirección');
	} else {
		setSuccessFor(streetName);
	}

	if(codigoPostalValue  === '') {
		setErrorFor(cp, 'Introduzca su código postal');
	} else {
		setSuccessFor(cp);
	}
}

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
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//INICA FUNCIONES A FORM ENVIO