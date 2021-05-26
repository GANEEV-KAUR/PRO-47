const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;

var cloud;
var babysparrow,babysparrowImage;
var sparrow2,sparrow2Image;
var sparrow4,sparrow4Image;
var mother,mootherImage;
var cardboard1,cardboard2,cardboard3,cardboard4, cardboard5,cardboard6,cardboard7,cardboard8, cardboard9,cardboard10,cardboard11,cardboard12, cardboard13,cardboard14,cardboard15,cardboard16, cardboard17,cardboard18,cardboard19,cardboard20, cardboard21,cardboar22,cardboard23,cardboard24,cardboard25,cardboard26,cardboard27,cardboard28, cardboard29,cardboard30,cardboard31,cardboard32,cardboard33,cardbaord34;




function preload(){

   cloud = loadImage("cloudImage.jpg");
   babysparrowImage = loadImage("sb1.png");
   sparrow2Image = loadImage("2sp.png");
   sparrow4Image = loadImage("4sp.png");
   motherImage = loadImage("mother.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(800,800);
   
    //create drops
    cardboard1 = createSprite(36,100,70,15);
    cardboard1.shapeColor = "green";
    
    cardboard2 = createSprite(80,150,15,80);
    cardboard2.shapeColor = "green";
    
     cardboard3 = createSprite(120,200,80,15);
    cardboard3.shapeColor = "green";
    
     cardboard4 = createSprite(155,250,15,80);
    cardboard4.shapeColor = "green";
    
     cardboard5 = createSprite(200 , 300 ,85, 15 );
    cardboard5.shapeColor = "green";
    
    // cardboard6 = createSprite(300, 35, 15, 60);
   // cardboard6.shapeColor = "green";
    
    cardboard7 = createSprite(250 , 70, 80, 15);
    cardboard7.shapeColor = "green";
    
    cardboard8 = createSprite(200, 100, 15,60 );
    cardboard8.shapeColor = "green";
    
    cardboard9 = createSprite(250, 340, 15, 80 );
    cardboard9.shapeColor = "green";
    
   cardboard10 = createSprite(300 , 380, 80,15);
    cardboard10.shapeColor = "green";
    
     cardboard11 = createSprite(350 , 70, 80, 15);
    cardboard11.shapeColor = "green";
    
    cardboard12 = createSprite(400 , 110, 15, 80);
    cardboard12.shapeColor = "green";
    
     cardboard13 = createSprite(350 , 150, 80, 15);
    cardboard13.shapeColor = "green";
    
    cardboard14 = createSprite(300 , 180, 15, 60);
    cardboard14.shapeColor = "green";
    
     cardboard15 = createSprite(240 , 225, 140, 15);
    cardboard15.shapeColor = "green";
    
     cardboard16 = createSprite(350 , 420, 15, 80);
    cardboard16.shapeColor = "green";
    
     cardboard17 = createSprite(450 , 100, 80, 15);
     cardboard17.shapeColor = "green";
    
    cardboard18 = createSprite(480 , 150, 15, 80);
    cardboard18.shapeColor = "green";
    
     cardboard19 = createSprite(530 , 200, 80, 15);
    cardboard19.shapeColor = "green";
    
     cardboard20 = createSprite(650 , 60, 15, 130);
    cardboard20.shapeColor = "green";
    
     cardboard21 = createSprite(720 , 140, 150, 15);
    cardboard21.shapeColor = "green";
    
     cardboard22 = createSprite(500 , 250, 15, 85);
    cardboard22.shapeColor = "green";
    
     cardboard23 = createSprite(730 , 250, 140, 15);
    cardboard23.shapeColor = "green";
    
     cardboard24 = createSprite(660 ,320, 15, 130);
    cardboard24.shapeColor = "green";
    
    cardboard25 = createSprite(400 , 470, 80, 15);
    cardboard25.shapeColor = "green";
    
    cardboard26 = createSprite(450 , 520, 15, 80);
    cardboard26.shapeColor = "green";
    
     cardboard27 = createSprite(500 , 570, 80, 15);
    cardboard27.shapeColor = "green";
     
    cardboard28 = createSprite(550 , 620, 15, 80);
    cardboard28.shapeColor = "green";
    
     cardboard29 = createSprite(740 , 500, 150, 15);
    cardboard29.shapeColor = "green";
    
    cardboard30 = createSprite(250, 470, 15, 150);
    cardboard30.shapeColor = "green";
    
     cardboard31 = createSprite( 300, 560, 90, 15);
    cardboard31.shapeColor = "green";
    
    cardboard32 = createSprite(200, 560, 100, 15);
    cardboard32.shapeColor = "green";

    cardboard33 = createSprite(650, 200, 150, 15);
    cardboard33.shapeColor = "green";

    
    babysparrow = createSprite(50,670,5,5);
    babysparrow.addImage(babysparrowImage);
    babysparrow.scale = 0.2

    sparrow2 = createSprite(100,400,5,5);
    sparrow2.addImage(sparrow2Image);
    sparrow2.scale = 0.3

    sparrow4 = createSprite(400,300,5,5);
    sparrow4.addImage(sparrow4Image);
    sparrow4.scale = 0.4

    mother = createSprite(80,50,5,5);
    mother.addImage(motherImage);
    mother.scale = 0.3
}


function draw(){
    Engine.update(engine);
    background(cloud); 

   if(keyDown(UP_ARROW)){
  babysparrow.y = babysparrow.y-2

   }
    
   if(keyDown(DOWN_ARROW)){
    babysparrow.y = babysparrow.y+2
  
     }

   if(keyDown(LEFT_ARROW)){
        babysparrow.x = babysparrow.x-2
      
         }

   if(keyDown(RIGHT_ARROW)){
    babysparrow.x = babysparrow.x+2
          
             }

    if(babysparrow.isTouching(cardboard33)){
     cardboard33.visible = false;

    }

    if(babysparrow.isTouching(cardboard19)){
        cardboard19.visible = false;
   
       }

    if(babysparrow.isTouching(sparrow2)){
        fill("black");
    text("plz tell me where is my mother " , 80,480);
    text("we don't know ", 150,400);
       }

       if(babysparrow.isTouching(sparrow4)){
        fill("black");
    text("plz tell me where is my mother " , 580,400);
    text("we don't know ", 520,320);
       }

       if(babysparrow.isTouching(mother)){
        fill("black");
    text("yay! mom " , 240,50);
    text("thank god", 120,70);
       }

    if(babysparrow.isTouching(cardboard1)||babysparrow.isTouching(cardboard2) || babysparrow.isTouching(cardboard3)||babysparrow.isTouching(cardboard4)||babysparrow.isTouching(cardboard5)||babysparrow.isTouching(cardboard7)||babysparrow.isTouching(cardboard8)||babysparrow.isTouching(cardboard9)|| babysparrow.isTouching(cardboard10)||babysparrow.isTouching(cardboard11) ||babysparrow.isTouching(cardboard12)||babysparrow.isTouching(cardboard13)||babysparrow.isTouching(cardboard14)||babysparrow.isTouching(cardboard15)||babysparrow.isTouching(cardboard16)|| babysparrow.isTouching(cardboard17) || babysparrow.isTouching(cardboard18) || babysparrow.isTouching(cardboard20) || babysparrow.isTouching(cardboard21)|| babysparrow.isTouching(cardboard22) || babysparrow.isTouching(cardboard23)||babysparrow.isTouching(cardboard24) ||babysparrow.isTouching(cardboard25)|| babysparrow.isTouching(cardboard26) || babysparrow.isTouching(cardboard27) || babysparrow.isTouching(cardboard28) || babysparrow.isTouching(cardboard29) || babysparrow.isTouching(cardboard30) || babysparrow.isTouching(cardboard31) || babysparrow.isTouching(cardboard32) || babysparrow.isTouching(cardboard22)){
        babysparrow.x = 50;
        babysparrow.y = 650;
        text("GAME IS OVER " ,400,400,(scale = 2) );
       
    }


    drawSprites();
}   

