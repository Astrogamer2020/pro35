class Foodclass{



    constructor(foodStock,lastFed){
        this.foodStock=foodStock;
        this.lastFed=lastFed;
        this.image = loadImage("images/Milk.png");
    }

    
    addFoods() {
        this.foodStock++;
    }

    

    getFoodStock(){
        return this.foodStock;

    }

    updateFoodStock(foodStock){
        this.foodStock=foodStock;
    }

    updateLastFed(lastFed) {
        this.lastFed = lastFed;
    }

    feedDog(){
        this.foodStock--;
        this.lastFed = hour();
    }


    getLastFed() {
        return this.lastFed;
    }



    display(){
        var x=80 ,y=100;
        imageMode(CENTER);

        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(1%10==0){
                    x=80;
                    y=y+50;
                }
               
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }
        
    }
}

