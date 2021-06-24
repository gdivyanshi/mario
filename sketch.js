 var mario_running,mario_dead , background_image,coinImg ,obstacle1Img,obstacle2Img;
var  obstacle3Img ;  
  



function preload(){
  mario_running = loadAnimation("capture1.png","capture3.png","capture4.png")
  mario_dead = loadImage("mariodead.png")
  background_image = loadImage("backg.jpg")
  coinImg = loadImage("coin.png")
  obstacle1Img = loadImage("obstacle1.png")
  obstacle2Img = loadImage("obstacle2.png")
  obstacle3Img = loadImage("obstacle3.png")
}

function setup(){
  createCanvas(800,500);
  
  ground = createSprite(0,220,800,50)
  ground.addImage(background_image)
  mario = createSprite(50,350,10,60)
  mario.addAnimation("running",mario_running)
}
function draw(){
  background("blue")
  drawSprites();
}