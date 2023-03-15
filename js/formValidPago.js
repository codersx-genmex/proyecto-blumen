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
const namePago = document.getElementById( 'namePago' );
const cardNum = document.getElementById( 'cardNum' );
const dateExp = document.getElementById( 'dateExp' );
const cvc = document.getElementById( 'cvc' );

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const namePagoValue = namePago.value.trim();
	const cardNumValue = cardNum.value.trim();
	const dateExpValue = dateExp.value.trim();
	const cvcValue = cvc.value.trim();
	
	
	if(namePagoValue  === '') {
		setErrorFor(namePago, 'Ingrese nombre completo');
	} else {
		setSuccessFor(namePago);
	}

	if(cardNumValue  === '') {
		setErrorFor(cardNum, 'Ingrese número de tarjeta');
	} else {
		setSuccessFor(cardNum);
	}

	if(dateExpValue === '') {
		setErrorFor(dateExp, 'Obligatorio');
	} else {
		setSuccessFor(dateExp);
	}

	if(cvcValue === '') {
		setErrorFor(cvc, 'Obligatorio');
	} else {
		setSuccessFor(cvc);
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