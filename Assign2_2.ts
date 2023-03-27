
function Summation(arr : number[]) : number
{
    var Sum : number = 0;
    var cnt : number = 0;

    for(cnt = 0; cnt < arr.length; cnt++)
    {
        Sum = Sum + arr[cnt];
    }

    return Sum;
}

var arr : number[] = [23 , 6 , 7 , 4 , 5 , 7];
var Add : number = 0;

Add = Summation(arr);

console.log("Addition is " +Add);