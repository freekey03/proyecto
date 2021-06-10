let a = document.getElementById('Interfaz1');
let b = document.getElementById('Interfaz2');
let Calculador = document.getElementById('Calculadora');

function Agregar(num){
	a.innerHTML += num;
	if (a.innerHTML.length >= 3){
		Calcular();
		}
	}

function Calcular(){
	b.innerHTML = eval(a.innerHTML);
}

function borrar(){
	a.innerHTML="";
	b.innerHTML="";
}

function Resul(){
	a.innerHTML = b.innerHTML;
	b.innerHTML="";
}

function claro()
{
	Calculadora.classList.remove('oscuro');
	Calculadora.classList.add('claro');
	let bot = document.querySelectorAll('.Boton');
	let t = bot.length;
	for (i = t-1; i >= 0; i--){
		bot[i].classList.remove('toscuro');
		bot[i].classList.add('tclaro');
	}
	a.classList.remove('toscuro');
	a.classList.add('tclaro');
	document.querySelector('#bc').classList.add('activo');
	document.querySelector('#bo').classList.remove('activo');
	document.querySelector('body').classList.remove('claro');
	document.querySelector('body').classList.add('oscuro');
}
function oscuro()
{
	Calculadora.classList.remove('claro');
	Calculadora.classList.add('oscuro');
	let bot = document.querySelectorAll('.Boton');
	let t = bot.length;
	for (i = t-1; i >= 0; i--){
		bot[i].classList.remove('tclaro');
		bot[i].classList.add('toscuro');
	}
	a.classList.remove('tclaro');
	a.classList.add('toscuro');
	document.querySelector('#bo').classList.add('activo');
	document.querySelector('#bc').classList.remove('activo');
	document.querySelector('body').classList.remove('claro');
	document.querySelector('body').classList.add('oscuro');
}
