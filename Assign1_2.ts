//function defination
function AreaCircle(rad : number) : number
{
    return(3.14 * rad * rad);
}

var radius : number = 5;
var area : number = 0;

area = AreaCircle(radius); //function call

console.log("Area of circle :" + area);