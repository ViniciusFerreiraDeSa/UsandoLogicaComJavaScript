let tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");

pincel.fillStyle = "lightgrey";
pincel.fillRect(0,0,600,400);

function desenhaCirculo(x, y, raio, cor){

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0,  2 * Math.PI);
    pincel.fill();
}

function limpaQuadro (){
    pincel.clearRect(0,0,600,400);
}

let x = 20
let sentido = 1;

function atualizaTela (){
    limpaQuadro();
    if(x >600){
        sentido = -1;
    }else if(x < 0){
        sentido = 1;
    }
    desenhaCirculo(x,20, 10, "red");
    x = x + sentido; 
}

setInterval(atualizaTela, 5);
