let tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");

function desenhaQuadrado (x,y,cor){

pincel.fillStyle = cor
            //x // y
pincel.fillRect(x, y, 50, 50);
pincel.fillStroke = "black";
pincel.strokeRect(x, y, 50, 50);


}
for(let x = 0; x < 600; x += 50){
    desenhaQuadrado(x, 0, "lightgreen");
    desenhaQuadrado(x, 50, "#69B1E4" );
    desenhaQuadrado(x,100, "lightgreen");''
    desenhaQuadrado(x, 150, "#69B1E4" );
}

/*
let x = 0
while(x < 600){
    desenhaQuadrado(x, 0, "lightgreen");
    desenhaQuadrado(x, 50, "#69B1E4" );
    desenhaQuadrado(x,100, "lightgreen");
    x = x + 50; 
}
*/

