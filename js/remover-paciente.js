var tabela = document.querySelector("#tabela-pacientes"); //acessa o conteúdo da classe paciente

tabela.addEventListener("dblclick", function(event){
	if (event.target.tagName == 'TD'){
		event.target.parentNode.classList.add("fadeOut");

		setTimeout(function(){	event.target.parentNode.remove(); }, 900);	 
			//seleciona o alvo a ser excluído (célula da tabela q será clicado),
			//dps chama o .parentNode (pai da célula->Tr) e, espera 0.9s para remover, e.remove()
	}
});
