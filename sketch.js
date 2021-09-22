var sea,ship;
var seaImg,shipImg1;
function preload(){

//ship.velocityY=5;
//ship.velocityY=-5;
//ship.setAnimation("ship-1.png");
//ship.scale=x3;
seaImg = loadImage("sea.png");
shipImg1 = loadImage("ship-1.png");


} 

function setup(){
  createCanvas(800,400);
  background("blue");
  sea = createSprite(200, 200,0,0);
  sea.addImage (seaImg);
  //sea.velocityX=-5;
  sea.scale=0.5;

  ship = createSprite(130, 200, 30, 30);
  ship.addImage (shipImg1);
  ship.scale=0.4;
}

function draw() {
 
 sea.velocityX= 3;

 if(sea.x < 0){
   sea.x = sea.width/8
 }
 
 drawSprites();
}