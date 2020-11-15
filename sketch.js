
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score, survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  
}



function setup() {
  createCanvas(400,400);
  
  monkey=createSprite(50,150,20,20)
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,390,900,10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;
  survivalTime = 0;
 
}


function draw() {
  background(255);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
   monkey.velocityY = monkey.velocityY + 0.8;
   
   monkey.collide(ground);
  
  food();
  spawnObstacles();
drawSprites(); 
  
   
   stroke("black");
   textSize(20);
   fill("black");
   survivalTime=Math.ceil(frameCount/frameRate())
   text("Survival Time:"+ survivalTime, 100,50)
  
  if(monkey.isTouching(obstacleGroup)){
    ground.velocityX = 0;
    monkey.velocityY = 0;
    obstacleGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
  }
  
   
}

function food(){
 if(frameCount % 80===0){
   banana = createSprite(500,90,30,10);
   banana.y = Math.round(random(20,150));
   banana.addImage(bananaImage);
   banana.scale = 0.1;
   banana.velocityX = -3;
   
   banana.lifetime = 140;
   foodGroup.add(banana);
 } 
}

function spawnObstacles(){
  if(frameCount % 300===0){
    var obstacle = createSprite(100,160,30,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
}






