// ---------------------------------------------------------------------------
// Write a typescript program which contains one function named as Maximum. 
// That function accepts three parameters and it should returns largest value from three input parameters
// INPUT :  23   89   6
// OUTPUT : Maximum number is 89.
//----------------------------------------------------------------------------

//Function Defination
function Maximum(Num1 : number, Num2 : number , Num3 : number)
{
    if(Num1 > Num2 && Num1 > Num3)
    {
        console.log("Maximum number is " +Num1);
    }
    else if(Num2 > Num3)
    {
        console.log("Maximum number is " +Num2);
    }
    else
    {
        console.log("Maximum number is " +Num3);
    }
}


var No1 : number = 23;
var No2 : number = 89;
var No3 : number = 6;

Maximum(No1,No2,No3)  // Function call