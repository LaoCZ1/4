console.log("test");

// массивы------------------------------------------
// не получается первое задание
// var sum = +prompt("Введите  сумму пополнения", 100);
// var tr = +prompt("Выбирете количество поездок", 10);


// var ob = {
// 	price1: 4,
// 	price2:3.9,
// 	price3:3.8,
// 	price4:3.7,
// 	price5:3.6
// };
// var arr = [1,2,3,4,5,6,7,8,9];

//----------------------------------------

var str = "some people 124 fell the rain 2105 others 655 just get wet";
var arr = str.split(" ");
console.log(str);
var arr2 = console.log(+arr[2],+arr[6],+arr[8]);
arr.splice(2,1)
arr.splice(5,1);
arr.splice(6,1);

console.log(arr);
var str2 = arr.join("-");
console.log(str2);
var arr2 = [ 124, 2105, 655];
console.log(arr2[0]*2,arr2[1]*2,arr2[2]*2);


