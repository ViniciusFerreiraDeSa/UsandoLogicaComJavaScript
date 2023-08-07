let tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");

pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 600, 400)

let raio = 10
let xAleatorio;
let yAleatorio;

function desenhaCirculo(x, y, raio, cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaQuadro() {

    pincel.clearRect(0, 0, 600, 400)
}

function desenhaAlvo(x, y) {
    desenhaCirculo(x, y, raio + 20, "red");
    desenhaCirculo(x, y, raio + 10, "white");
    desenhaCirculo(x, y, raio, "red");
}

function sorteiaAlvo(maximo) {
    return Math.floor(Math.random() * maximo)
}

function atualizaTela() {
    limpaQuadro();
    xAleatorio = sorteiaAlvo(600);
    yAleatorio = sorteiaAlvo(400);

    desenhaAlvo(xAleatorio, yAleatorio);
}

setInterval(atualizaTela, 905);

function dispara(evento) {

    let x = evento.pageX - tela.offsetLeft
    let y = evento.pageY - tela.offsetTop


    if ((x > xAleatorio - raio) &&
        (x < xAleatorio + raio) &&
        (y > yAleatorio - raio) &&
        (y < yAleatorio + raio)) {
        alert("Você ganhou parabéns!!")

    }

}

tela.onclick = dispara;