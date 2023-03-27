/*
Create one typescript application which contains one class named as Arithmatic.
Arithmatic class contains three characteristic ( class data member ) as Number1 , Number2.
Create one paramerterised constructor which accept two values and assign it to Number1 and Number2.

In Arithmatic class we have to write four methods ( Behaviour ) as Addition, Substraction, Multiplication and Division.

Addition method will add Number1, Number2 and return result.
Substraction method will substract Number1, Number2 and return result.
Multiplication method will multiply Number1, Number2 and return result.
Division method will divide Number1, Number2 & return result.

After designing the class create two objects of that class by providing some hardcoded value.
Call all the method by using both the objects
*/

class Arithmatic
{
    Number1 : number;
    Number2 : number;

    constructor(No1 : number, No2 : number)
    {
        this.Number1 = No1;
        this.Number2 = No2;
    }

    Addition() : number
    {
        return this.Number1 +this.Number2;
    }

    Substraction() : number
    {
        return this.Number1 - this.Number2;
    }

    Multiplication() : number
    {
        return this.Number1 +this.Number2;
    }

    Division() : number
    {
        return this.Number1 - this.Number2;
    }
}

var Obj1 = new Arithmatic(21,10);
var Obj2 = new Arithmatic(30,10);
var Ret : number = 0;

console.log("Addition ...");
Ret = Obj1.Addition();
console.log("Addition is Obj1 :" +Ret);

Ret = Obj2.Addition();
console.log("Addition is Obj2 :" +Ret);

console.log("Substraction ...");
Ret = Obj1.Substraction();
console.log("Substraction is Obj1 :" +Ret);

Ret = Obj2.Substraction();
console.log("Substraction is Obj2 :" +Ret);

console.log("Multiplication ...");
Ret = Obj1.Multiplication();
console.log("Multiplication is Obj1 :" +Ret);

Ret = Obj2.Multiplication();
console.log("Multiplication is Obj2 :" +Ret);

console.log("Division ...")
Ret = Obj1.Division();
console.log("Division is Obj1 :" +Ret);

Ret = Obj2.Division();
console.log("Division is Obj2 :" +Ret);

/*
OUTPUT:

Addition ...
Addition is Obj1 :31
Addition is Obj2 :40
Substraction ...
Substraction is Obj1 :11
Substraction is Obj2 :20
Multiplication ...
Multiplication is Obj1 :31
Multiplication is Obj2 :40
Division ...
Division is Obj1 :11
Division is Obj2 :20
*/