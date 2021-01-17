//Create variables here
var dog,dogImage,happyDogImage,database;
var feed,addFood;
var food1;
//var milkImage;
var addTheImages
function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png");
  happyDogImage=loadImage("images/dogImg1.png");
  //milkImage=loadImage("images/Milk.png");
}

function setup() {
  createCanvas(1000, 1000);
  dog=createSprite(200,250,1,1);
  dog.addImage(dogImage);
  database=firebase.database();
  foodStock=database.ref("Food")
  foodStock.on("value",readStock);
  food1=new Foodclass(10,12);
  feed=createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food")
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

  fedTime=database.ref('FeedTime');
  fedTime.on("value",readLastFed);  
  
}


function draw() {  
  background(46, 139, 87);
  lastFed = food1.getLastFed();
  if(lastFed>12){
    fill("black")
    text("Last Feed : "+ lastFed%12 + "PM", 350,30 );
  }
  else if (lastFed==0){
    fill("black")
    text("Last Feed : 12 AM",350,30);
  }else{
    fill("black")
    text("Last Feed : "+lastFed +"AM",350,30);
  }
  fill("black");
  text(food1.getFoodStock(),250,250);
  

  //fill("black");
  // text("Note:Press UP_ARROW to feed Thor",230,140);
  // fill("black");
  // text("Note:Press DOWN_ARROW to reset the game.",230,190);
  // fill("black");
  // text("Note:PLease reset the course before leaving",200,100);
  dogImage.resize(100, 100);
  happyDogImage.resize(100, 100);
  food1.display();
  drawSprites();
  //add styles here

}

function readStock(data){
  food1.updateFoodStock(data.val);

}

function readLastFed(data){
  food1.updateLastFed(data.val);

}

function writeStock(m){
  if(m<=0){
    m=0;
  }
  else{
    m=m-1;
  }
  database.ref("/").update({
    Food:m
  });
}


 


function addFoods(){
  
  food1.addFoods();
  database.ref('/').update({
    Food:food1.getFoodStock()    
  });

}


function feedDog (){
  dog.addImage(happyDogImage);
  
  food1.feedDog();
  database.ref('/').update({
    Food:food1.getFoodStock(),
    FeedTime:food1.getLastFed()
  });
}

