
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {

  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2;

  obstaclesGroup= new Group();
}


function draw() {
  
  background(255);
  
  if(obstaclesGroup.isTouching(monkey)){
    ground.velocityX = 0;
    monkey.velocityY = 0;
    obstaclesGroup.setvelocityXEach(0);
  FoodGroup.setvelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
  }
  
  
  
  
  
 
  
  
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  //jump when the space key is pressed
    if(keyDown("space")) {
        monkey.velocityY = -12;
       }   
 monkey.velocityY = monkey.velocityY + 0.8   
    
     
  monkey.collide(ground);
  Obstacles();
 drawSprites();
  banana();
}
  
function Obstacles(){
 if (frameCount % 300===0 ){
   var obstacle = createSprite(600,330,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -6 ;
   obstacle.scale=0.1;
 }
}
function banana(){
if (frameCount % 80===0){
  var banana = createSprite(130,200,10,40);
  banana.addImage(bananaImage);
  banana.velocityX = -9;
  banana.scale=0.1
}
} 

  
  
  
  
  
  
  







