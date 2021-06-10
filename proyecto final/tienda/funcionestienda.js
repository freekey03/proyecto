
let productos = [[0, "Coca", 12],
				 [1, "Sabritas", 8],
				 [2, "Bonafont", 5],
				 [3, "Panditas", 7],
				 [4, "Picafresas", 1]];
let carrito = [];

window.addEventListener("load", cargar);

function cargar(){
	s = document.querySelector('section');
	for(i = 0; i < productos.length; i++)
	{
		document.querySelector('section').innerHTML += "<div id='"+ 
		productos[i][0]+"'>" + 
		"<h1>" + productos[i][1] + "</h1>" +
		"<p>$" + productos[i][2] + "</p>" +
		"<button onclick = 'agregar("+productos[i][0]+")'>+</button>" + 
		"</div>"; 
	}
}

function agregar(id){
	carrito.push(id);
	document.querySSelector('s').innerHTML = carrito.length;
}

function mostrarCarrito(){
	let listaProductos = "";
	for(i = 0; i < carrito.length; i++){
		for(y = 0; y < productos.length; y++){
			if(productos[y][0] == carrito[i]){
				listaProductos += "-" + productos[y][1] + "     $" + productos[y][2] + "\n";

			}
		}
	}
	alert("Carrito de compras: \n" + listaProductos);
}

function visibilidad(){
	mostrarCarrito();
}