/*
Calculate Area of circle. Using class and constructor.
create 2 objects of class and call area dunction using both the objects.
*/
var Circle = /** @class */ (function () {
    function Circle(Data) {
        this.Radius = Data;
        this.PI = 3.14;
    }
    Circle.prototype.CalculateArea = function () {
        var Ans = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    };
    return Circle;
}());
var obj1 = new Circle(10.7);
var obj2 = new Circle(12.3);
var Ret = 0;
console.log("Area using obj1...");
Ret = obj1.CalculateArea();
console.log("Area is :" + Ret);
console.log("Area using obj2...");
Ret = obj2.CalculateArea();
console.log("Area is :" + Ret);
