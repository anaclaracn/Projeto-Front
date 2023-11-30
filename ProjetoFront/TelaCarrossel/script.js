// armazena o índice da imagem atual
var currentImageIndex = 0;

// vetor com os caminhos das imagens
const images = [
    "imagens/compjr.png",
    "imagens/juridica.png",
    "imagens/emakers.png",
    "imagens/floresta.png"
];

const totalImages = images.length;
const imagensElement = document.getElementById("imagens");

// função para exibir a imagem com base no índice fornecido
function showImage(index) {
    imagensElement.innerHTML = `<img id="imagem1" src="${images[index]}" alt="imagem ${index + 1}">`;
}

// avança para a próxima imagem
function rodaDireita() {
    // atualiza o índice da imagem atual, garantindo que ele permaneça dentro dos limites do array
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    // exibe a imagem atualizada
    showImage(currentImageIndex);
}

// retrocede para a imagem anterior
function rodaEsquerda() {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    showImage(currentImageIndex);
}
