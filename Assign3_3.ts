/*
Create one typescript application which contains one class named as CircleX which will inherits above Circle Class.
In CircleX class we have one method(Behaviour) as Circumferance which will return circumference of circle.

After designing the class create two objects of that class by providing some hardcoded values.
Call Circumference and Area methods by using both the objects.
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

class CircleX extends Circle
{
    constructor(Data : number)
    {
        super(Data);
    }

    CalculateCircumferance(): number 
    {
        let Ans : number = 0;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    }
}

var obj1 = new CircleX(10.7);
var obj2 = new CircleX(12.3);
var Ret : number = 0;

console.log("using obj1..");
Ret = obj1.CalculateArea();
console.log("Area is :" +Ret);

Ret = obj1.CalculateCircumferance();
console.log("Area is :" +Ret);

console.log("using obj2..");
Ret = obj2.CalculateArea();
console.log("Area is :" +Ret);

Ret = obj2.CalculateCircumferance();
console.log("Area is :" +Ret);

/*
OUTPUT:

using obj1..
Area is :359.49859999999995
Area is :67.196
using obj2..
Area is :475.0506000000001
Area is :77.24400000000001
*/