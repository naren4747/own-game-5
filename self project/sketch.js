var player,playerimg
var enemy,enemyimg,enemyGroup
var bullet,bulletimg,bulletGroup,bulletcount=20,shoot
var enemy2,enemy21,enemy22,enemy23,enemy24
var zombiesound

var bgimg
var edge
var enemyDeaths=19
var gameState="Level 1"

function preload(){
    playerimg=loadImage("man.png")
    enemyimg = loadImage("enemy.jpeg")
    bulletimg=loadImage("bullet.jpeg")
    bgimg=loadImage("bg1.jpg")
    enemy21=loadImage("enemy.jpeg")
    enemy22=loadImage("enemy2.png")
    enemy23=loadImage("enemy3.png")
    enemy24=loadImage("enemy5.png")
    zombiesound=loadSound("zombie.mp3")
    shoot=loadSound("bullet.mp3")
}
function setup(){
    createCanvas(1200,700)
    
    player=createSprite(50,100)
    player.addImage(playerimg)
    enemyGroup = new Group()
    bulletGroup=new Group()
   
    edge=createEdgeSprites()
    

}
function draw(){
    background(255)
    player.scale=0.3
    player.collide(edge)
    if(gameState==="Level 1"){
        if(keyDown("up")){
        player.y=player.y-10
    }
    if(keyDown("down")){
        player.y=player.y+10
    }

    if(keyDown("space")){
        spawnbullet()
        bulletcount+=-1/3
        shoot.play()
    }
    if(bulletGroup.isTouching(enemyGroup)){
        bulletGroup.destroyEach()
        enemyGroup.destroyEach()
        enemyDeaths+=1
      
    }
      spawnenemy()
      if(enemyGroup.isTouching(player)||enemyGroup.isTouching(edge[0])){
        
        gameState="end"
    }
    if (enemyDeaths>=20&&enemyDeaths<25){
        gameState="Level 2"
    }
}
   


 
 
 if (gameState==="Level 2"){
    if(keyDown("up")){
        player.y=player.y-10
    }
    if(keyDown("down")){
        player.y=player.y+10
    }
    if(keyDown("left")){
        player.x=player.x-10
    }
    if(keyDown("right")){
        player.x=player.x+10
    }
    if(keyDown("space")){
        spawnbullet()
        bulletcount+=-1
         shoot.play()
    }
  
    if(bulletGroup.isTouching(enemyGroup)){
        bulletGroup.destroyEach()
        enemyGroup.destroyEach()
        enemyDeaths+=1
       
    }
    if(enemyDeaths>=25){
        gameState="level3"
    }
     spawnenemy2()
      if(enemyGroup.isTouching(player)||enemyGroup.isTouching(edge[0])){
        
        gameState="end"
    }
 }
    if(gameState==="level3"){
        if(keyDown("up")){
            player.y=player.y-10
        }
        if(keyDown("down")){
            player.y=player.y+10
        }
        if(keyDown("left")){
            player.x=player.x-10
        }
        if(keyDown("right")){
            player.x=player.x+10
        }
        if(keyDown("space")){
            spawnbullet()
            bulletcount+=-1
            shoot.play()
        }
        
        //enemyGroup.pointToEach(player.x-20,player.y)
        if(bulletGroup.isTouching(enemyGroup)){
            bulletGroup.destroyEach()
            enemyGroup.destroyEach()
            enemyDeaths+=1
            zombiesound.play()
        }
         spawnenemy3()
          if(enemyGroup.isTouching(player)||enemyGroup.isTouching(edge[0])){
            
            gameState="end"
        }
    }
 
    fill("black")
    textSize(20)
    text(gameState,100,50)
    text("Score : "+enemyDeaths,600,100)
    text("ammo : "+bulletcount,100,100)
    if(gameState==="end"){
        fill("red")
        textSize(20)
        text("GameOver",600,350)
        player.destroy()
        enemyGroup.setVelocityYEach(0)
    }
   
  

  drawSprites()
}
function spawnbullet(){
    bullet=createSprite(player.x+54,player.y-40)
    bullet.addImage(bulletimg)
    bullet.scale=0.04
    bullet.velocityX=10
    bulletGroup.add(bullet)
    
}
function spawnenemy(){
    if(frameCount%170===0){
    enemy=createSprite(1200,random(50,650))
    enemy.addImage(enemyimg)
    zombiesound.play()
    enemy.scale=0.4
    enemy.velocityX=-5
    enemyGroup.add(enemy)
  
    enemy.collide(edge[3])
}
}
function spawnenemy2() {
    if(frameCount % 170 === 0) {
       enemy2 = createSprite(1200,random(50,650));
      
      enemy2.velocityX = -5;
      zombiesound.play()
      
      var rand = Math.round(random(1,4));
      switch(rand) {
        case 1: enemy2.addImage(enemy21);
        enemy2.scale=0.4;
                break;
        case 2: enemy2.addImage(enemy22);
        enemy2.scale=0.1;
                break;
        case 3: enemy2.addImage(enemy23);
        enemy2.scale=0.1;
                break;
        case 4: enemy2.addImage(enemy24);
        enemy2.scale=0.2;
                
        default: break;
      }
      console.log(rand)
     
      enemy2.lifetime = 300;
      //add each enemy2 to the group
      enemyGroup.add(enemy2);
    }
}
function spawnenemy3() {
    if(frameCount % 170 === 0) {
       enemy3 = createSprite(player.x-300,player.y);
      
      enemy3.velocityX = +1;
      zombiesound.play()
      
      var rand = Math.round(random(1,4));
      switch(rand) {
        case 1: enemy3.addImage(enemy21);
        enemy3.scale=0.4;
                break;
        case 2: enemy3.addImage(enemy22);
        enemy3.scale=0.1;
                break;
        case 3: enemy3.addImage(enemy23);
        enemy3.scale=0.1;
                break;
        case 4: enemy3.addImage(enemy24);
        enemy3.scale=0.2;
                
        default: break;
      }
      console.log(rand)
     
      enemy3.lifetime = 300;
      //add each enemy2 to the group
      enemyGroup.add(enemy3);
    }
}