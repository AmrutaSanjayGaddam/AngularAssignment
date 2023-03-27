/*
Create typescript application which contains one class named as Circle.
Circle class contains two characteristics (class and members )as Radius, PI.
Create one parameterised constructor which accept one value and assign it to Radius. value of PI is set to 3.14.

In Circle class we have to one method (Behaviour) as Area which will return area of Circle.
After designing as class create two objects of that class by providing some hardcoded value.
call the method by using both the objects.
*/

class Circle
{
    Radius : number;
    PI : number;

    constructor(Data : number)
    {
        this.Radius = Data;
        this.PI = 3.14;
    }

    CalculateArea() : number
    {
        let Ans : number = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    }

}

var obj1 = new Circle(10.7);
var obj2 = new Circle(12.3);
var Ret : number = 0;

console.log("Area using obj1...");
Ret = obj1.CalculateArea();
console.log("Area is :" +Ret);

console.log("Area using obj2...");
Ret = obj2.CalculateArea();
console.log("Area is :" +Ret);

/*
OUTPUT:

Area using obj1...
Area is :359.49859999999995
Area using obj2...
Area is :475.0506000000001
*/