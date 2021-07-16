var dog,sadDog,happyDog;
var form,milk,database

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database = firebase.database()
  var milkref = database.ref("milk");
  milkref.on("value", function (data) {
    milk = data.val();
  });

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
form = new Form()
form.display()

}

function draw() {
  background(46,139,87);
  textSize(25)
  stroke ("black")
  text("you have "+milk+" milk bottle",10,30)
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
