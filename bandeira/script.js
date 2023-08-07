let tela = document.querySelector("canvas");
let pincel = tela.getContext('2d');
pincel.fillStyle = "white";
                //x  //y //largura //altura
pincel.fillRect(0 ,  0, 600, 400);

pincel.fillStyle = "lightgreen";
pincel.fillRect(0 , 0, 200, 400);

pincel.fiiStyle = "ligthblue";
pincel.fillRect(400, 0, 200, 400);

pincel.fillStyle = "pink";
pincel.beginPath();
pincel.moveTo(300, 200);
pincel.lineTo(200, 400);
pincel.lineTo(400, 400);
pincel.fill();

pincel.fillStyle = "pink";
pincel.beginPath();
pincel.arc(300, 200 ,50, 0, 2 * 3.14);
pincel.fill();

pincel.fillStyle = "purple";
pincel.beginPath();
pincel.arc(300, 150 ,30, 0, 2 * 3.14);
pincel.fill();






