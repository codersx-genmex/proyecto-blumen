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

//INICIA VALIDACION 2
const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresiones = {
	calle: /^[a-zA-ZÀ-ÿ0-9\_\s\-.]{1,45}$/, // letras y numeros
    numInterior: /^[a-zA-ZÀ-ÿ0-9\_\s\-.]{1,10}$/, //letras y numeros
    numExterior: /^[0-9]{1,10}$/, //sólo numeros
    codigoPostal: /^[0-9]{1,10}$/, //sólo numeros
    referencia: /^[a-zA-ZÀ-ÿ0-9\_\s\-.]{2,}$/, //A partir de 4 letras, para que sea referencia concreta
}

const campos = {
	calle: false,
    numInterior: false,
    numExterior: false,
    codigoPostal: false,
    referencia: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "calle":
            validarCampo(expresiones.calle, e.target, 'calle');
		break;
		case "numInterior":
			validarCampo(expresiones.numInterior, e.target, 'numInterior');
        break;
        case "numExterior":
			validarCampo(expresiones.numExterior, e.target, 'numExterior');
        break;
        case "codigoPostal":
            validarCampo(expresiones.codigoPostal, e.target, 'codigoPostal');
		break;
		case "referencia":
            validarCampo( expresiones.referencia, e.target, 'referencia' );
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
    if ( expresion.test(input.value) ) {
                document.getElementById( `grupo-${campo}` ).classList.remove( 'formGroupIncorrecto' );
                document.getElementById( `grupo-${campo}` ).classList.add( 'formGroupCorrecto' );
                document.querySelector( `#grupo-${campo} i` ).classList.add( 'fa-check-circle' );
                document.querySelector( `#grupo-${campo} i` ).classList.remove( 'fa-times-circle' );
                document.querySelector( `#grupo-${ campo } .formInputError` ).classList.remove( 'formInputErrorActivo' );
                campos[ campo ] = true;
    } else {
                document.getElementById( `grupo-${campo}` ).classList.add( 'formGroupIncorrecto' );
                document.getElementById( `grupo-${campo}` ).classList.remove( 'formGroupCorrecto' );
                document.querySelector( `#grupo-${campo} i` ).classList.add( 'fa-times-circle' );
                document.querySelector( `#grupo-${campo} i`).classList.remove( 'fa-check-circle' );
                document.querySelector( `#grupo-${ campo } .formInputError` ).classList.add( 'formInputErrorActivo' );
                campos[ campo ] = false;
    }
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

form.addEventListener( 'submit', ( e ) => {
    e.preventDefault(); //para prevenir que envíe los datos, todavía no hay que mandar los datos
    if (campos.calle && campos.numInterior && campos.numExterior && campos.codigoPostal && campos.referencia) {
        formulario.reset();
        document.getElementById( 'formMensajeExito' ).classList.add( 'formMensajeExitoActivo' );
        setTimeout(() => {
			document.getElementById('formMensajeExito').classList.remove('formMensajeExitoActivo');
        }, 5000 );
        
        document.querySelectorAll('.formGroupCorrecto').forEach((icono) => {
			icono.classList.remove('formGroupCorrecto');
		});
    } else {
        document.getElementById('formularioMensaje').classList.add('formularioMensajeExitoActivo')
    }
} )