var canvas, backgroundImage;
var allPlayers;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var car1,car2,car3,car4,cars

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  console.log(displayWidth+' '+displayHeight)
}


function draw(){
  if(playerCount===4){
    game.update(1)
  }
  if(gameState === 1){
    clear()
    game.play()
  }
}
