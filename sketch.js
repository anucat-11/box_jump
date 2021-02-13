var canvas;
var song;
var music;
var box1,box2,box3,box4;
var box5;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //music.loop();

    //create 4 different surfaces
    box1 = createSprite(100,585,160,25);
    box1.shapeColor="red";
    box2 = createSprite(285,585,160,25);
    box2.shapeColor="black ";
    box3 = createSprite(485,585,160,25);
    box3.shapeColor="blue";
    box4 = createSprite(685,585,160,25);
    box4.shapeColor="yellow";
    box5 = createSprite(random(20,750),30,40);
    box5.shapeColor="white";
    box5.velocityY=4;
    box5.velocityX=4;
    


    //create box sprite and give velocity

}

function draw() {
    background("pink");
    //create edgeSprite

    

   if(box1.isTouching(box5) && box5.bounceOff(box1)){

    box5.shapeColor="red";
    music.play();
    
   }

   if(box2.isTouching(box5) && box5.bounceOff(box2)){

    box5.shapeColor="black";
    music.play();
   }
   
   if(box3.isTouching(box5) && box5.bounceOff(box3)){

    box5.shapeColor="blue";
    music.play();
   }

   if(box4.isTouching(box5) && box5.bounceOff(box4)){

    box5.shapeColor="yellow";
    music.play();
   }

   if(box5.isTouching(box4)){
       box5.shapeColor=rgb(255,128,0);
       box5.velocityX=0;
       box5.velocityY=0;
       music.stop();
       }

    drawSprites();

    //add condition to check if box touching surface and make it box
}
