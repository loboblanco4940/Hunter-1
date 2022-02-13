var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var form, player, game;


//Definir variable de los osos
var bears,bear1,bear2,bear3;

var forest, bear1_img, bear2_img, bear3_img;

function preload(){
  forest = loadImage("Img/Forest1.webp");
  bear1_img = loadImage("Img/Bear1.png");
  bear2_img = loadImage("Img/Bear2.png");
  bear3_img = loadImage("Img/Bear3.png");
}


function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

}

//Crear funcion mouseDragged
 


