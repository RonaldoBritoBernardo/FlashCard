function criaCartao(categoria = 'Categoria', pergunta = 'Pergunta não fornecida', resposta = 'Resposta não fornecida') {
    // Obtém o container onde os cartões serão adicionados
    const container = document.getElementById('container');

    // Verifica se o container existe
    if (!container) {
        console.error('Elemento com ID "container" não encontrado.');
        return;
    }

    // Cria o elemento do cartão
    const cartao = document.createElement('article');
    cartao.className = 'cartao';

    // Define o conteúdo do cartão
    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta" style="display: none;" aria-hidden="true">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    // Estado para controlar a visibilidade da resposta
    let respostaEstaVisivel = false;

    // Função para alternar a visibilidade da resposta e da pergunta
    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;

        // Seleciona os elementos de pergunta e resposta
        const perguntaDiv = cartao.querySelector('.cartao__conteudo__pergunta');
        const respostaDiv = cartao.querySelector('.cartao__conteudo__resposta');

        // Alterna a visibilidade dos elementos
        if (perguntaDiv && respostaDiv) {
            perguntaDiv.style.display = respostaEstaVisivel ? 'none' : 'block';
            respostaDiv.style.display = respostaEstaVisivel ? 'block' : 'none';
            respostaDiv.setAttribute('aria-hidden', !respostaEstaVisivel);
        }

        cartao.classList.toggle('active', respostaEstaVisivel);
    }

    // Adiciona o evento de clique ao cartão
    cartao.addEventListener('click', viraCartao);

    // Adiciona o cartão ao container
    container.appendChild(cartao);
}
