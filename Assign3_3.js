/*
Create one typescript application which contains one class named as CircleX which will inherits above Circle Class.
In CircleX class we have one method(Behaviour) as Circumferance which will return circumference of circle.

After designing the class create two objects of that class by providing some hardcoded values.
Call Circumference and Area methods by using both the objects.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(Data) {
        return _super.call(this, Data) || this;
    }
    CircleX.prototype.CalculateCircumferance = function () {
        var Ans = 0;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    };
    return CircleX;
}(Circle));
var obj1 = new CircleX(10.7);
var obj2 = new CircleX(12.3);
var Ret = 0;
console.log("using obj1..");
Ret = obj1.CalculateArea();
console.log("Area is :" + Ret);
Ret = obj1.CalculateCircumferance();
console.log("Area is :" + Ret);
console.log("using obj2..");
Ret = obj2.CalculateArea();
console.log("Area is :" + Ret);
Ret = obj2.CalculateCircumferance();
console.log("Area is :" + Ret);
