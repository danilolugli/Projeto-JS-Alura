//alert("Não clique no ' OK ' !!!");
console.log("Estou aparecendo no Log do navegador!");
var titulo = document.querySelector(".titulo");
titulo.textContent = "Mudando o título por JS";

var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i<pacientes.length; i++) {
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;
	
	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);

	if(!pesoEhValido){
		pesoEhValido = false;
		tdPeso.textContent = "Peso inválido!";
		paciente.classList.add("paciente-invalido");
	}

	if(!alturaEhValida){
		alturaEhValida = false;
		tdAltura.textContent = "Altura inválida!";
		paciente.classList.add("paciente-invalido");
	}

	if(pesoEhValido && alturaEhValida){
		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc;
	}

} //fim do laço For

//funções
function validaPeso(peso){
	if(peso > 0 && peso < 500){
		return true;
	}
	else{
		return false;
	}
}

function validaAltura(altura){
	if(altura > 0 && altura < 3){
		return true;
	}
	else{
		return false;
	}
}

function calculaImc(peso, altura){
	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}