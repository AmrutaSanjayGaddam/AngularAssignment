function Summation(arr) {
    var Sum = 0;
    var cnt = 0;
    for (cnt = 0; cnt < arr.length; cnt++) {
        Sum = Sum + arr[cnt];
    }
    return Sum;
}
var arr = [23, 6, 7, 4, 5, 7];
var Add = 0;
Add = Summation(arr);
console.log("Addition is " + Add);
