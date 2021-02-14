var box1
var box2
var box3
function setup() {
  createCanvas(800,400);
  box1=createSprite(400, 200, 20, 20);
  box1.shapeColor="red"
  box2=createSprite(300,200,70,70)
  box2.shapeColor="red"
  box3=createSprite(600,200,50,50)
  box3.shapeColor="red"
  box1.debug=true
  box2.debug=true
  box3.debug=true
}

function draw() {
  background(0); 
  box1.x=mouseX;
  box1.y=mouseY; 
  drawSprites();
  if(isTouching(box1,box3)){
    box1.shapeColor="green"
    box3.shapeColor="green"
  }else{
    box1.shapeColor="red"
    box3.shapeColor="red"
  }
}