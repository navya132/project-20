var background1, backgroundImage;
var cat, catImage;
var mouse, mouseImage;

function preload() {
    //load the images here
    backgroundImage=loadImage("images/garden.png");
    mouseImage=loadImage("images/jerryOne.png", "images/jerryTwo.png", "images/jerryThree.png", "images/jerryFour.png", );
    catImage=loadImage("images/tomOne.png", "images/tomTwo.png", "images/tomThree.png", "images/tomFour.png");
    catImg2=loadImage("images/tomTwo.png")
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
background1= createSprite(400,300,400,800)
background1.addImage(backgroundImage);

cat= createSprite(600,400,100,100)
cat.addImage(catImage)
cat.scale=0.08;

mouse= createSprite(200,400,100,100);
mouse.addImage(mouseImage)
mouse.scale=0.07;

}

function draw() {

    background(255)
    //Write condition here to evalute if tom and jerry collide

text(mouseX+","+mouseY,10,45)



if(cat.x - mouse.x < (cat.width-mouse.width)/2) {
cat.velocityX=0;
    }

    keyPressed();

    drawSprites();
}


function keyPressed(){

if(keyCode === LEFT_ARROW) {
    cat.velocityX = -5; 
    cat.addAnimation("catRunning", catImg2);
    cat.changeAnimation("catRunning");
 }
}


