function ArmstrongNumber(num : number) : boolean
{
    const numStr = num.toString();
    const power = numStr.length;
    let sum = 0;

    for(let i = 0; i < power ; i++){
        sum = sum + Math.pow(parseInt(numStr[i]),power);
    }

    return sum === num;
}

const myNum = 153;
if(ArmstrongNumber(myNum)){
    console.log("It is an Armstrong Number");
}
else
{
    console.log("It is not an Armstrong Number");
}































/*function CheckArmstrong(iNo : number) : boolean
	{
		var iTemp : number = iNo;
        console.log("line 5 "+iTemp);
        
        var Sum : number = 0;
        var cnt : number = 1;

        while(iTemp > 0)
        {
            
            var Rem = iTemp % 10;
            console.log(Rem);

            Sum += Rem * Rem * Rem;
            console.log(Sum);
            
            var iTemp1 = iTemp / 10;
             iTemp = parseInt(iTemp1.toString);
            console.log(iTemp);
            cnt++;
            
        }
        
        console.log("Final sum "+Sum);

		if(Sum == iNo)
		{
			return true;
		}
		else
		{
			return false;
		}
	}


	
		
		var iValue : number = 370;
		var bRet : boolean  = false;

		
		bRet = CheckArmstrong(iValue);

		if(bRet == true)
		{	
            console.log("It is Armstrong number");	
        }
		else
		{	
            console.log("It is not Armstrong number");	
        }
	

*/