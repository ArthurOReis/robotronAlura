const controle = document.querySelectorAll('[data-controle]'); //Cria uma constante array que pega todos valores dos elementos HTML do tipo "data-controle"

/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
};

/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

controle.forEach( (elemento) =>{ //"Para cada elemento dentro da array 'controle'"
    elemento.addEventListener("click", (evento) =>{ //Cria um evento que, ao clicar, vai executar alguma coisa, usando a função anônima
        evento.preventDefault(); //Método implementado para a página não recarregar quando o usuário executar o evento
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode); //O método recebe parâmetros, o primeiro que será "-" ou "+", o outro parametro vai receber a classe pai e elementos filhos
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle);
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

/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

function atualizaEstatisticas(peca, operacao){
    if(operacao == '+'){
        estatisticas.forEach( (elemento) => {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        })
    } else {
        estatisticas.forEach( (elemento) => {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
        })
    }

}