function Maximum(arr : number[])
{
    let cnt : number = 0;
    let second : number = 0;
    let largest : number = 0;

    if(arr[0] > arr[1])
    {
        largest = arr[0];
        second = arr[1];   
    }
    else
    {
        largest = arr[1];
        second = arr[0];
    }

    for(cnt = 2; cnt < arr.length ; cnt++)
    {
        if(largest < arr[cnt])
        {
            second = largest;
            largest = arr[cnt];
        }
        else if(second < arr[cnt])
        {
            second = arr[cnt];
        }
    }

    console.log("Second maximum number is :"+second);
}

var arr : number[] = [23 ,89 , 6 , 29 , 56 , 45 , 77 , 32];

Maximum(arr);
