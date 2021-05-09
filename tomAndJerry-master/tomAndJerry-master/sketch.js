//creating variables for canvas, background, Tom , Jerry.
var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    //Preloading Images.
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");

}

function setup(){
    //Creating Canvas
    canvas = createCanvas(1000,800);

    //Creating Sprite for tom.
    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    //Creating Sprite for Jerry 
    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    //Background
    background(bg);

    //Writing  condition to evaluate to check if mouse and cat collide.
    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  

    //To draw sprites
    drawSprites();
}

//Writing funtion to make cat and mouse move.
function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}