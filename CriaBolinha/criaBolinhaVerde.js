let tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");

pincel.fillStyle = "lightgrey";
        // x , y, largura , altura
pincel.fillRect(0,0,600,400);

function exibeBolinhaNaTela(evento){
    let x = evento.pageX - tela.offsetLeft;
    let y = evento.pageY - tela.offsetTop;
    pincel.fillStyle = "green";
    pincel.beginPath();
    pincel.arc(x,y,10,0,2 * Math.PI);
    pincel.fill();
    console.log(`${x} ${y}`);
    
}
tela.onclick = exibeBolinhaNaTela; 

// tela.addEventListener("click", () => exibeAlerta());  Pode ser feito com o ADDEVENTLISTENER 
