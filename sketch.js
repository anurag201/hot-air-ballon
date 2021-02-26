var ballon;
var database;
var bgimage
var height;
var ballonImage1,ballonImage2,ballonImage3

function preload() {
  bgimage = loadImage("Hot Air Ballon-01.png")
  //ballonImage1 = loadAnimation("images/Hot Air Ballon-02.png","images/Hot Air Ballon-03.png","images/Hot Air Ballon-04")
  ballonImage1 = loadImage("Hot Air Ballon-02.png")
}




function setup() {

  database = firebase.database()


  createCanvas(500,500);

  ballon = createSprite(250,300, 50, 50);
 // ballon.addAnimation("HotAirBallon",ballonImage1)
  ballon.addImage(ballonImage1)
  ballon.scale = 0.5
  var ballonPosition = database.ref('ballon/height');
  ballonPosition.on("value",readHeight,showError)
}

function draw() {
  background(bgimage);  

  if(keyDown(LEFT_ARROW)){
    ballon.x = ballon.x -10
  }
  else if(keyDown(RIGHT_ARROW)){
    ballon.x = ballon.x+10

  }
  else if(keyDown(UP_ARROW)){
    ballon.y = ballon.y -10
  }
  else if(keyDown(DOWN_ARROW)){
    ballon.y = ballon.y +10
  }
  




  drawSprites();
}


function updateHeight(x,y){
  database.ref('ballon/height').set({
    'x': height.x + x,
    'y': height.y + y
  })

}

function readHeight(data){
  height = data.val();
  ballon.x  = height.x;
  ballon.y = height.y;

}


function showError(){

  console.log("Error in writing to the database");

}

