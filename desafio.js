// Desafio 1
// Olá, este desafio consiste em reforçar o uso de algumas das inúmeras funções existentes no javascript juntamente com lógica.

// Exercício 1
// Dado array abaixo, monte um novo array com apenas números (inteiros e decimais) seguindo as regras:

// Cada valor do novo array deve ser somado com o número anterior
// Se o novo valor não for par, deverá ser inserido um novo número anterior a ele somando + 0.5
// const arrayNumeros = [0, '1', '1.5', 2, 3, 4, 5, 6, 7, '8', 9];

// Resposta:
const arrayNumeros1 = [0, '1', '1.5', 2, 3, 4, 5, 6, 7, '8', 9];
let novoArray = [];
let somaAtual = 0;

arrayNumeros1.forEach((valor) => {
    let numeroAtual = parseFloat(valor);
    somaAtual += numeroAtual;

    if (somaAtual % 2 !== 0) {
        novoArray.push(somaAtual - 0.5);
    }

    novoArray.push(somaAtual);
});
console.log(novoArray)
// _________________________________________________________________________________________________________________________
// Exercício 2
// Utilize o forEach e o filter para gerar um novo array filtrando apenas os números pares.

// Realize com o forEach
// Realize com o filter
// const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Resposta:
const arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayParesForEach = [];

arrayNumeros2.forEach(numero => {
    if (numero % 2 === 0 ) {
        arrayParesForEach.push(numero);
    }
});
console.log(arrayParesForEach);

const arrayParesFilter = arrayNumeros2.filter(numero => numero % 2 === 0);
console.log(arrayParesFilter);
//_____________________________________________________________________________________________________
// Exercício 3
// Retorne a data abaixo (no formato ISO) nos seguintes padrões:

// DIA/MÊS/ANO
// DIA/MÊS/ANO HORA:MINUTO
// const date = '2022-06-07T01:01:06.336Z';

// Resposta:
const date = '2022-06-07T01:01:06.336Z';
const dataObj = new Date(date);
const diaMesAno = dataObj.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
});

const diaMesAnoHoraMinuto = dataObj.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
}) + ' ' + dataObj.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
});
console.log(diaMesAno);
console.log(diaMesAnoHoraMinuto);
//______________________________________________________________________________________________________________
// Exercício 4
// Crie uma função que retorna o mês por extenso de uma data qualquer passada por parâmetro, exemplo:

// const dataAtual = new Date(); // 2022-06-07T01:01:06.336Z
// const mesExtenso = retornaMesPorExtenso(dataAtual);
// console.log(mesExtenso); // Junho
// Obs.: Como exemplo o mês da data passada seria Junho.

// Resposta: 
function retornaMesPorExtenso(data) {
    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' 
    ];
    const mesIndex = data.getMonth();
    return meses[mesIndex];
}
const dataAtual = new Date();
const mesExtenso = retornaMesPorExtenso(dataAtual);
console.log(mesExtenso);
// ___________________________________________________________________________________________________________________________________________

// Exercício 5
// Crie uma função que retorne a data passada formatada de acordo com os patterns abaixo:

// DIA (DD)
// DIA/MES (DD/MM)
// DIA/MES/ANO (DD/MM/YYYY)
//     const dataFormatada = formatarData(new Date((), 'DD/MM/YYYY'); // 2022-06-07T01:01:06.336Z
//     console.log(dataFormatada); // resultado: 07/06/2022

// Resposta:
function formatarData(data, formato) {
    const dia = String(data.getUTCDate()).padStart(2, '0');
    const mes = String(data.getUTCMonth() + 1).padStart(2, '0');
    const ano = data.getUTCFullYear();

    switch (formato) {
        case 'DD':
            return dia;
        case 'DD/MM':
            return `${dia}/${mes}`;
        case 'DD/MM/YYYY':
            return `${dia}/${mes}/${ano}`;
        default: throw new Error('Fomato inválido. Use "DD", "DD/MM", ou "DD/MM/YYYY".');
    }
}

const data = new Date('2022-06-07T01:01:06.336z');
const dataFormatada = formatarData(data, "DD/MM/YYYY");
console.log(dataFormatada);

//___________________________________________________________________________________________________________________





// Exercício 6
// Monte uma função que retorna HTML dinâmico que serão os elementos utilizados para uma paginação. Siga as regras:

// A função receberá dois parâmetros: total geral de itens e items por página
// O total geral de itens são 15
// Você só pode exibir 2 itens por página
// O número da página deve vir acompanhado do código dado como exemplo: Página 1/Página 2/Página 3, etc...
// Utilize o HTML <li> abaixo apenas como exemplo:

//     <li>Página 1</li>
//     <li>Página 2</li>
//     <li>Página 3</li>
//     <li>Página 4</li>
//     ...
// Exemplo de chamada:

// const meuHtmlDinamico = retornaHtmlDinamico(15, 2);
// console.log(meuHtmlDinamico);

// Resposta:
function retornaHtmlDinamico(totalItens, itensPorPagina) {
    const totalPaginas = Math.ceil(totalItens / itensPorPagina);
    let html = '';
    for (let i = 1; i <= totalPaginas; i++) {
        html += `<li>Página ${i}</li>/n`;
    }
    return html;
}
const meuHtmlDinamico = retornaHtmlDinamico(15, 2);
console.log(meuHtmlDinamico);


// _______________________________________________________________________________________________________


// Exercício 7
// Junte os três arrays em um só e retorne um novo sem números duplicados:

// const array1 = [0, 1, 2, 3, 4, 5, 6, 70, 8, 9];
// const array2 = [0, 100, 200, 300, 4, 500, 6, 70, 88, 9];
// const array3 = [00, 1, 2, 88, 9, 88, 5, 8, 0, 200, 100];

const array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = [0, 100, 200, 300, 4, 500, 6, 70, 88, 9];
const array3 = [0, 1, 2, 88, 9, 88, 5, 8, 0, 200, 100];

const arrayJunto = array1.concat(array2, array3);

const arraySemDuplicidades = [...new Set(arrayJunto)];
console.log(arraySemDuplicidades);