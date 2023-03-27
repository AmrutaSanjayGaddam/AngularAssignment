function Maximum(arr) {
    var cnt = 0;
    for (cnt = 1; cnt <= arr.length; cnt++) {
        if (arr[0] < arr[cnt]) {
            arr[0] = arr[cnt];
        }
    }
    console.log("Maximum number is :" + arr[0]);
}
var arr = [23, 89, 6, 29, 56, 45, 77, 32];
Maximum(arr);
