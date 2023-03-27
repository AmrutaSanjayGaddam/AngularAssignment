function Maximum(arr) {
    var cnt = 0;
    var second = 0;
    var largest = 0;
    if (arr[0] > arr[1]) {
        largest = arr[0];
        second = arr[1];
    }
    else {
        largest = arr[1];
        second = arr[0];
    }
    for (cnt = 2; cnt < arr.length; cnt++) {
        if (largest < arr[cnt]) {
            second = largest;
            largest = arr[cnt];
        }
        else if (second < arr[cnt]) {
            second = arr[cnt];
        }
    }
    console.log("Second maximum number is :" + second);
}
var arr = [23, 89, 6, 29, 56, 45, 77, 32];
Maximum(arr);
