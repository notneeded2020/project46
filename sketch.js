var alien,astronaut,asteroid,bg;
var astronautImg,asteroidImg;
var alien,alienImg;






function preload(){

  bg = loadImage("spacebg.jpg");

  alien1 = loadImage("alien.png");
  alien2 = loadImage("alien2.png");
  alien3 = loadImage("alien3.png");

  astronautImg = loadImage("astronaut.png");
  asteroidImg = loadImage("asteroid.png");

  alienImg = loadImage("alien3.png");
  
}





function setup() {
  createCanvas(displayWidth,displayHeight - 50);

  astronaut = createSprite(displayWidth/2-550,displayHeight/2+100,20,20)
  astronaut.addImage(astronautImg);
  astronaut.scale = 0.5
  
}

function draw() {
  background(bg);  


  if(keyDown(UP_ARROW)){
    astronaut.y = astronaut.y-10; 
  }

  if(keyDown(DOWN_ARROW)){
    astronaut.y = astronaut.y+10; 
  }



  spawnAsteroid();
  spawnAlien();

  drawSprites();
}

  function spawnAsteroid(){
    
    if(frameCount % 100 === 0){
      asteroid = createSprite(displayWidth,10,20,20)
      asteroid.addImage(asteroidImg);
      asteroid.scale = 0.2
      asteroid.y = Math.round(random(displayHeight - 50,50))
      asteroid.velocityX = -10;
    }



  }

  function spawnAlien(){
    
    if(frameCount % 100 === 0){
      alien = createSprite(displayWidth,10,20,20)
      alien.addImage(alienImg);
      alien.scale = 0.2
      alien.y = Math.round(random(displayHeight - 50,50))
      alien.velocityX = -10;
    }



  }





