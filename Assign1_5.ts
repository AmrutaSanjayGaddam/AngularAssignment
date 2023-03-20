
function Fibonacci(No1 : number)
{
    var a : number = 0;
    var b : number = 1;

    var c : number = 0;

    console.log("" +b);

    c = a + b;

    while(c <= No1)
    {
        console.log("" +c);
        a = b;
        b = c;
        c = a + b;
    }
}

var No1 : number = 21;
Fibonacci(No1);