// var a = [1,"hello",3];
// a[100] = "new";
// a.length = 100;
// document.write(a.length);


//for (var i = 0; i < a.length; i++) {
     //document.write(a[i] + "<br>");
//}

//for (var index in a) {

//document.write(index + "-----" + //a[index] + "<br>");
//}

//var a = //[1,"hello",3,3,4,76,7,8];



/*var arr = [100,200,1,2,11,111,22,222,3,4,5];
arr.sort(
	function (a,b) {
		if (a<b)
{
return false;
};

	return true;	
});
document.write(arr);*/


/*
var arr = [1,2,3]
var a = arr.concat (4,5,6, ["banana",7]);
document.write(a);
console.log();
*/



var array = new Array(10);

for(var i = 0; i < array.length; i++) {

array[i] = new Array(10);

}

for(var j = 0; j < array.length; j++) {

     for(var n = 0; n < array[j].length; n++) {

     array[j][n] = j*n
}

};

document.write(array[6][5]);














