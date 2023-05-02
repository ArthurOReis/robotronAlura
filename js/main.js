const controle = document.querySelectorAll('[data-controle]'); //Cria uma constante array que pega todos valores dos elementos HTML do tipo "data-controle"

/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

controle.forEach( (elemento) =>{ //"Para cada elemento dentro da array 'controle'"
    elemento.addEventListener("click", (evento) =>{ //Cria um evento que, ao clicar, vai executar alguma coisa, usando a função anônima
        evento.preventDefault(); //Método implementado para a página não recarregar quando o usuário executar o evento
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode); //O método recebe parâmetros, o primeiro que será "-" ou "+", o outro parametro vai receber a classe pai e elementos filhos
        console.log(evento.target.parentNode)
    })
});

/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]"); //Constante criada vai pegar apenas da data 'data-contador', mesmo se os elementos não terem um valor
    
    if(operacao == '-'){
        peca.value = parseInt(peca.value) - 1;
        if (peca.value < 10 && peca.value >= 0) {
            peca.value = "0" + peca.value;
        }
    } else {
        peca.value = parseInt(peca.value) + 1;
        if (peca.value < 10 && peca.value >= 0) {
            peca.value = "0" + peca.value;
        }
    }
}