let jogosAlugados = 0;
// contar e exibir o número de jogos alugados
function contarExibirAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    let nomeJogo = jogoClicado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`));
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        jogosAlugados--;
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }

    contarExibirAlugados();
}
// verificar se já tem algum jogo alugado
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarExibirAlugados();
});
// conferir se a palavra ou frase é um palíndromo
function conferirPalindromo(frase) {
    let fraseInvertida = frase.split('').reverse().join('');
    if (frase === fraseInvertida) {
        return true;
    } else {
        return false;
    }
}

let palavraFrase = "socorram me subi no onibus em marrocos";
if (conferirPalindromo(palavraFrase)) {
    console.log(`"${palavraFrase}" é um palíndromo`);
} else {
    console.log(`"${palavraFrase}" não é um palíndromo`);
}
// ajustar os números em ordem crescente
function ordenarNumeros (a, b, c) {
    let numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

ordenarNumeros(13, 7, 22);