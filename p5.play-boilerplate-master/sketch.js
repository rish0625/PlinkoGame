const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;
 

var particles = [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
// var score =0;
var count = 0;
var gameState ="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("black");
  textSize(35)
  // text("Score : "+score,20,40);
  fill("white");
  //text(mouseX + "," + mouseY, 20, 50);
  textSize(35)
  text(" 100 ", 5, 550);
  text(" 100 ", 80, 550);
  text(" 200 ", 160, 550);
  text(" 200 ", 240, 550);
  text(" 300 ", 320, 550);
  text(" 300 ", 400, 550);
  text(" 200 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 100 ", 640, 550);
  text(" 100 ", 720, 550);
  Engine.update(engine);
  ground.display();
  
  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    //return
  }

  

  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(particle!=null)
    {
       particle.display();
       console.log("hello");
        
        // if (particle.body.position.y>760)
        // {
        //       if (particle.body.position.x < 300) 
        //       {
        //           // score=score+500;      
        //           particle=null;
        //           if ( count>= 5) gameState ="end";                          
        //       }


        //       else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
        //       {
        //             // score = score + 100;
        //             particle=null;
        //             if ( count>= 5) gameState ="end";

        //       }
        //       else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
        //       {
        //             // score = score + 200;
        //             particle=null;
        //             if ( count>= 5)  gameState ="end";

        //       }      
              
        // }
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
   for (var l = 0; l < particles.length; l++){
     particles[l].display();
   }
 
}


function keyPressed()
{
  if(keyCode == 32)
  {
     particle=new Particle(mouseX, 100, 10, 10); 
     particles.push(particle);
  }   
}

// function mousePressed()
// {
//   if()
//   {
//      particle=new Particle(mouseX, 100, 10, 10); 
//      particles.push(particle);
//   }   
// }