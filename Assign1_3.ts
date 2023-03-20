
function DisplayFactor(Num1 : number)
{
    let cnt :number = 1;
    
    for(cnt = 1;cnt < Num1; cnt++)
    {
        if(Num1 % cnt == 0)
        {
            console.log(" " +cnt);
        }
    }
}

var No1 : number = 20;

DisplayFactor(No1);


