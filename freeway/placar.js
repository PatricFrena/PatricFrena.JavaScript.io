//Variaveis do placar
let PlacarTouro = 0;
let PlacarVaca = 0;

function Placar(){
    textSize(30);
  fill("black");
  text(PlacarTouro, 400, 30);

  textSize(30); 
  fill("green");
  text(PlacarVaca, 200, 30);
  
  if(yVaca <=10){
     PlacarVaca += 1;
    ponto.play();
    yVaca = 368;
  }
  if(yTouro <=10){
     PlacarTouro += 1;
    ponto.play();
    yTouro = 368;
  }
}
