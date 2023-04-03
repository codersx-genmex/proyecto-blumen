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
	nombres: /^[a-zA-ZÀ-ÿ\_\s\-]{2,30}$/, // Letras, numeros, guion y guion_bajo // Oscar Isaac
    apellidoP: /^[a-zA-ZÀ-ÿ\s]{2,25}$/, //Hernandez
    apellidoM: /^[a-zA-ZÀ-ÿ\s]{2,25}$/, // Letras y espacios, pueden llevar acentos. Estrada
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,}$/, // mínimo de 6 digitos, minúsculas, una mayúscula, un número y un caracter especial
}

const campos = {
	nombres: false,
    apellidoP: false,
    apellidoM: false,
    email: false,
    password: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombres":
            validarCampo(expresiones.nombres, e.target, 'nombres');
		break;
		case "apellidoP":
			validarCampo(expresiones.apellidoP, e.target, 'apellidoP');
        break;
        case "apellidoM":
			validarCampo(expresiones.apellidoM, e.target, 'apellidoM');
        break;
        case "email":
            validarCampo(expresiones.email, e.target, 'email');
		break;
		case "password":
            validarCampo( expresiones.password, e.target, 'password' );
            validarPassword2();
		break;
		case "password2":
			validarPassword2();
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


const validarPassword2 = () => {
    const inputPassword1 = document.getElementById( 'password' );
    const inputPassword2 = document.getElementById( 'password2' );

    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById( `grupo-password2` ).classList.add( 'formGroupIncorrecto' );
        document.getElementById( `grupo-password2` ).classList.remove( 'formGroupCorrecto' );
        document.querySelector( `#grupo-password2 i` ).classList.add( 'fa-times-circle' );
        document.querySelector( `#grupo-password2 i`).classList.remove( 'fa-check-circle' );
        document.querySelector( `#grupo-password2 .formInputError` ).classList.add( 'formInputErrorActivo' );
        campos[ 'password' ] = false;
    } else {
        document.getElementById( `grupo-password2` ).classList.remove( 'formGroupIncorrecto' );
        document.getElementById( `grupo-password2` ).classList.add( 'formGroupCorrecto' );
        document.querySelector( `#grupo-password2 i` ).classList.remove( 'fa-times-circle' );
        document.querySelector( `#grupo-password2 i`).classList.add( 'fa-check-circle' );
        document.querySelector( `#grupo-password2 .formInputError` ).classList.remove( 'formInputErrorActivo' );
        campos[ 'password' ] = true;
    }
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

form.addEventListener( 'submit', ( e ) => {
    e.preventDefault(); //para prevenir que envíe los datos, todavía no hay que mandar los datos
    if (campos.nombres && campos.apellidoP && campos.apellidoM && campos.email && campos.password) {
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



