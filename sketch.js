var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
bgImg = loadImage("assets/obsTop2.png")

//balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

  createCanvas(1500,600);
//background image
//bg = createSprite();
//bg.addImage(bgImg);
//bg.scale = 4

//creating top and bottom grounds

bottomGround = createSprite(100,590,2900,20);
bottomGround.visible = true;
bottomGround.shapeColor="blue"

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
//balloon.addAnimation("balloon",balloonImg);
//balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("RIGHT_ARROW")) {
            balloon.x+=5 ;
            
          }
          if(keyDown("LEFT_ARROW")) {
            balloon.x-=5 ;
            
          }

          if(keyDown("UP_ARROW")) {
            balloon.y-=5 ;
            
          }

          if(keyDown("DOWN_ARROW")) {
            balloon.y+=5 ;
            
          }
spawnclouds()
spawnbirds()

          //adding gravity
           //balloon.velocityY = balloon.velocityY + 2;
   
        drawSprites();
        
}
function spawnclouds(){
  if (frameCount % 60 === 0) {
    cloud = createSprite(1400,100,40,10);
   cloud.y = Math.round(random(50,300));
   //cloud.addImage(cloudImage);
   cloud.scale = 0.5;
   cloud.velocityX = -10;
   
    //assign lifetime to the variable
   cloud.lifetime = 234;
   
   //adjust the depth
   //cloud.depth = trex.depth;
   //trex.depth = trex.depth + 1;
   
   //adding cloud to the group
  //cloudsGroup.add(cloud);
   }
}
function spawnbirds(){
  if (frameCount % 60 === 0) {
    cloud1 = createSprite(1500,100,40,10);
   cloud1.y = Math.round(random(30,300));
   cloud1.addImage(bgImg);
   cloud1.scale = 0.2;
   cloud1.velocityX = -10;
   
    //assign lifetime to the variable
   cloud1.lifetime = 234;
   
   //adjust the depth
   //cloud.depth = trex.depth;
   //trex.depth = trex.depth + 1;
   
   //adding cloud to the group
  //cloudsGroup.add(cloud);
  }
}