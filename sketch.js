var canvas;
var music;
var box;
var bluesurface;
var orangesurface;
var redsurface;
var greensurface;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(700,600);

    //create 4 different surfaces
    bluesurface = createSprite (90,590,150,20);
    bluesurface.shapeColor = "blue";

    orangesurface = createSprite (250,590,150,20);
    orangesurface.shapeColor = "orange";

    redsurface = createSprite (410,590,150,20);
    redsurface.shapeColor = "red"

    greensurface = createSprite (570,590,150,20);
    greensurface.shapeColor = "green"
     

    //create box sprite and give velocity
    box = createSprite (20,150,25,25);
    box.shapeColor = "white"
    box.velocityY = 7;
    box.velocityX = 7;
}

function draw() {
    background("black");
    //create edgeSprite
   edges = createEdgeSprites();

   box.bounceOff(edges)
      
    //add condition to check if box touching surface and make it box

    if(bluesurface.isTouching(box)&& box.bounceOff(bluesurface)){
        box.shapeColor = "blue"
    }

    if(orangesurface.isTouching(box)&& box.bounceOff(orangesurface)){
        box.shapeColor = "orange"
    }

    if(redsurface.isTouching(box)&& box.bounceOff(redsurface)){
        box.shapeColor = "red"
    }

    if(greensurface.isTouching(box)&& box.bounceOff(greensurface)){
        box.shapeColor = "green"
    }


        drawSprites();
}
