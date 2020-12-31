const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles;
var plinkos = [];
var divisions = [];
var ground;
var gameState = 1;
var divisionHeight=300;
var score =0;
var turn = 0;
var line;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);
  line = new Ground(400, 450, 790, 2);

   //division row
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }

    //plinko rows
    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() 
{
  background("black");
  textSize(20)
  Engine.update(engine);

  text("Score = " + score, 660, 20);

  //sections scores
  text("500", 20,520);
  text("500", 100,520);
  text("200", 180,520);
  text("200", 260,520);
  text("100", 340,520);
  text("100", 420,520);
  text("200", 500,520);
  text("200", 580,520);
  text("500", 660,520);
  text("500", 740,520);

  //first 2 500 sections
  if (particle = null) {
    particle.display();
    if (particle.body.position.y>500) {
      if (particle.body.position.x<150) {
        score = score + 500
        particle = null;
        if (turn >= 5) {
          gameState = "end"
        }
      }
    }
  }
  
  //first 2 200 sections
  if (particle = null) {
    particle.display();
    if (particle.body.position.y>500) {
      if (particle.body.position.x<320) {
        score = score + 200
        particle = null;
        if (turn >= 5) {
          gameState = "end"
        }
      }
    }
  }

  //2 100 sections
  if (particle = null) {
    particle.display();
    if (particle.body.position.y>500) {
      if (particle.body.position.x<490) {
        score = score + 100
        particle = null;
        if (turn >= 5) {
          gameState = "end"
        }
      }
    }
  }

  //second 2 200 sections
  if (particle = null) {
    particle.display();
    if (particle.body.position.y>500) {
      if (particle.body.position.x<660) {
        score = score + 200
        particle = null;
        if (turn >= 5) {
          gameState = "end"
        }
      }
    }
  }

  //second 2 500 sections
  if (particle = null) {
    particle.display();
    if (particle.body.position.y>500) {
      if (particle.body.position.x<800) {
        score = score + 500
        particle = null;
        if (turn >= 5) {
          gameState = "end"
        }
      }
    }
  }

  //gameState = "end" when 5 turn are over
  if (turn >= 5) {
    gameState = "end"
    turn = 0;
  }

  //Game Over words
  if (gameState = "end") {
    textSize(100);
    text("Game Over", 180, 360)
  }

  ground.display();
  line.display();

  mousePressed();
 
  //plinko displaying
  for (var i = 0; i < plinkos.length; i++)
  {
    plinkos[i].display();
  }

  //division displaying
  for(var k = 0; k<divisions.length; k++)
  {
    divisions[k].display();
  }

}

function mousePressed()
{
  if (gameState == "end") {
    turn = turn + 1
    particle = new Particle(mouseX, 10, 10, 10);
  }
}
