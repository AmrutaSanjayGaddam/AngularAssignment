
function ChkPrime(No1 : number) : number
{   
    let cnt : number = 0;

    for(cnt = 2 ; cnt <= (No1 - 1) ; cnt++)
    {
        if(No1 % cnt == 0)
        {
            return 0;
        }
    }
    return 1;
}

var No1 : number = 11;
var Ret : number = 0;

Ret = ChkPrime(No1);

if(Ret == 1)
{
    console.log("It is Prime Number.");
}
else
{
    console.log("It is not Prime Number.");
}
