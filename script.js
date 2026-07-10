function clicouNoBotao() {
    var endereco = document.getElementById("endereco");
    endereco.scrollIntoView({ behavior: "smooth" });
}

const modal = document.querySelector('.modal');

function mostrarModal() {
    modal.style.display = '50%';
}