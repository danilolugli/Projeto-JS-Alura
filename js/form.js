var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){	
	event.preventDefault(); //impede que o evento padrão ocorra

	var form = document.querySelector("#form-adiciona"); 
	var paciente = obtemPacienteForm(form);
	var erros = validaPaciente(paciente);

	if (erros.length > 0){
		exibeMensagensErro(erros);
		return;
	}
	adicionaPacienteTabela(paciente);
	form.reset(); //limpa os campos do Formulário depois de inserir o paciente na tabela

	var mensagensErro = document.querySelector("#mensagens-erro");
	mensagensErro.innerHTML = "";
});


function adicionaPacienteTabela(paciente){
	var pacienteTr = montaTr(paciente); 	//criando as Tds (campos da Tr) da tabela
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
}

function obtemPacienteForm(form){
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}

function montaTd(dado, classe){
	var td = document.createElement("td");
	td.classList.add(classe);
	td.textContent = dado;

	return td;
}

function montaTr(paciente){
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");
	//Cria as TD's e a adiciona dentro da TR
	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); 
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;
}

function validaPaciente(paciente){

	var erros = []; // array de erros para mostrar os problemas quando o usuário errar

	if (paciente.nome.length == 0) { // se o nome for nulo
		erros.push("O nome não pode ser em branco.");
	}

	if (paciente.peso.length == 0){
		erros.push("O peso não pode ser em branco.");
	}

	if (paciente.altura.length == 0){
		erros.push("A altura não pode ser em branco.");
	}

	if (paciente.gordura.length == 0) {
		erros.push("A gordura do paciente não pode ser em branco.");
	}

	if (!validaPeso(paciente.peso)) {
		erros.push("Peso é inválido!");
	}

	if (!validaAltura(paciente.altura)) {
		erros.push("Altura é inválida!");
	}

	return erros;
}

function exibeMensagensErro(erros){ //recebe o array de erros e cria uma <li> para cada mensagem de erro
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";

	erros.forEach(function(erro) {
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}