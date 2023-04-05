// const card = document.querySelector(".contenedor");
// console.log(card);

// card.setAttribute("style","background: url('Prod/Arreglo_prod.png')");
// setTimeout(()=>{fetch("http://localhost:8080/pedido")
// .then(res=>res.json())
// .then(res=>{
//     console.log(res);

// })}
// ,1000)

let productos;
// Aquí se debe cambiar el URL del servicio en el BackEnd
const URL_MAIN = 'https://backend-blumen-production.up.railway.app/producto';

const SOURCE = 'https://backend-blumen-production.up.railway.app/producto';


async function addItem( div_Productos ) {
    try {
        const res = await fetch( SOURCE, {
            method: 'GET',
            mode: 'cors',
            headers: {
                accept: 'application/json',
            },
        } );
        const result = await res.json();
        return result;
    } catch ( err ) {
        console.error( err )
    }

}


function addItems( div_Productos ) {
	//div_Productos es el div donde se va a agregar los productos

	fetch(URL_MAIN, {
		method: 'get', //tipo de método
	})
		.then(function (response) {
			//response es la respuesta del servidor
			response.json().then(function (json) {
				//json es el objeto que se obtiene del servicio
				console.log(json); //imprime el json
				console.log(json.length); //imprime el tamaño del json
				productos = json; //se guarda el json en la variable productos
				Array.from(json).forEach((p) => {
					//Toma el JSON, si es un arreglo haces el forEach. Si no lo es, mandas el error.
					div_Productos.innerHTML += `
                    <div class="card" style="background-image: url('/img/Prod/${p.imagen}');" data-content="${p.nombreRamo} $${p.precio}"></div>
                `;
				}); // foreach para agregar los productos al div del HTML
			}); //then
		})
		.catch(function (err) {
			//si hay un error
			console.log(err); //imprime el error
		});
} // addItems

window.addEventListener('load', function () {
	//cuando se cargue la página
	let div = document.querySelector('.contenedor'); //div donde se va a agregar los productos
	addItems(div); //se llama a la función addItems
});
