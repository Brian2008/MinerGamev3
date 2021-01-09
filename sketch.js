
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var player,playerImage
var pickaxe,pickaxeImage
var stone,stoneGroup,stoneImage
var gold,goldImage
var Chain

function preload()
{
	playerImage=loadImage("MyGame/Miner.png")
	stoneImage=loadImage("MyGame/Stone.png")
	goldImage=loadImage("MyGame/GoldBlock.png")
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;
	player=createSprite(500,100,20,20);
	player.addImage(playerImage)
	player.scale=0.2
	pickaxe = new Pickaxe(500,150)
	gold=createSprite(500,900,50,50)
	gold.addImage(goldImage)
	gold.scale=0.2

	for (i = 0; i < 1200; i+=50) {
		stone=createSprite(i,200,50,50)
		stone.addImage(stoneImage)
		stone.scale=0.15
	}
	for (i = 0; i < 1200; i+=50) {
		stone=createSprite(i,300,50,50)
		stone.addImage(stoneImage)
		stone.scale=0.15
	}

	for (x = 0; x < 1200; x+=50) {
		stone=createSprite(x,350,50,50)
		stone.addImage(stoneImage)
		stone.scale=0.15
	} 
	for (i = 0; i < 1200; i+=50) {
		stone=createSprite(i,450,50,50)
		stone.addImage(stoneImage)
		stone.scale=0.15
	}
	for (a = 0; a < 1200; a+=50) {
		stone=createSprite(a,500,50,50)
		stone.addImage(stoneImage)
		stone.scale=0.15
	} 
	for (i = 0; i < 1200; i+=50) {
		stone=createSprite(i,550,50,50)
		stone.addImage(stoneImage)
		stone.scale=0.15
	}
	for (b = 0; b < 1200; b+=50) {
		stone=createSprite(b,650,50,50)
		stone.addImage(stoneImage)
		stone.scale=0.15
	}
Chain = new SlingShot(pickaxe.body,{x:500,y:100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyDown(RIGHT_ARROW)){
	player.x=player.x+10
  }
  if(keyDown(LEFT_ARROW)){
	player.x=player.x-10
  }
 if(pickaxe.isTouching(stone)){
	 stone.destroy();
 }

  pickaxe.display();
  Chain.display();
  drawSprites();

}
function mouseDragged(){
        Matter.Body.setPosition(pickaxe.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    Chain.fly();
}



