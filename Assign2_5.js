function ChkString(str1) {
    var a = str1.indexOf("Marvellous");
    console.log(a);
    if (a >= 0) {
        console.log("String contains Marvellous in it");
    }
    else {
        console.log("String is not contains Marvellous in it");
    }
}
var str = "Pune Kothrud Marvellous Infosystems.";
ChkString(str);
