let tela = document.querySelector("canvas");
let pincel = tela.getContext('2d');


pincel.fillStyle = "white";
//x  //y //largura //altura
pincel.fillRect(0 ,  0, 600, 400);

pincel.fillStyle = "darkgreen";
pincel.fillRect(100 , 50, 400, 400);

// OLhos
pincel.fillStyle = "black";
pincel.fillRect(130, 100, 120, 120);
pincel.fill();

pincel.fillStyle = "black";
pincel.fillRect(330, 100, 120, 120);
pincel.fill();

// nariz
pincel.fillStyle = "black";
pincel.fillRect(250, 200, 80, 110);
pincel.fill();

// bocas
pincel.fillStyle = "black";
pincel.fillRect(330, 280, 70, 110);
pincel.fill();

pincel.fillStyle = "black";
pincel.fillRect(180, 280, 70, 110);
pincel.fill();

