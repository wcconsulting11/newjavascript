var el = document.getElementById('style');
/*el.style.background = "pink";
el.style.color = "white";
el.style.width = "200px";
el.style.height = "100px";*/

el.style.cssText = "background:blue, color:white, hieght:200px";

getComputedStyle(el);




console.log("Welcome to my JS Fundamentals")

function makeCoffee(Organic_Vanilla_Creamer)
{
Instructions +="pour into cup 2 tablespoons of creamer"
Instructions +="add coffee to brim"
instructions +="Or go to Starbucks and order a Venti Vanilla Latte"
instructions +="Note: do not mess with someones morning Joe. Pick your battles wisely!"
return instructions;
}

Console.log(makeCoffee);

var car = {
    make : "Audi"
    color : "Grey",
    speed : 180,
    engine: {
        size : 2.0,
        horsepower : 228
        }
    drive: function(){return : "drive"}

};

console.log(car.make);


function name(fullname)
{
    return fullname.firstname + fullname.lastname;
}
name( {function({return firstnme})

var shippinglist = [
    "coffee", "creamer","wine","fruit","vegetables"
];


function Apple(color,weight)
{
    this.color = color;
    this.weight = weight;
}
Apple.prototype ={
    eat = functiom(){return"eat the apple";};
    throw = functiom(){return"throw the apple";};
}
var apple1 = new Apple("red", 99);
var apple2 = new Apple("green", 189);
var apple3 = new Apple("yellow", 299);

var carsLeft = 1,
    carsRight = 0,
    greenMan = "no";

if(greenMan === "yes")
{
    console.log('cross the road');
}
else if(
    greenMan === "yes" && (carsLeft ===0 || carsRight ===0)
)
{
    console.log('All clear Cross the road');
}
else{
    console.log( "Stay where you are!");
}