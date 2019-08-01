//for(var n=0;n<99999;n++){
var arr = [];
for (var i = 0; i < 15; i++) {
  arr.push(Math.floor(Math.random() * 100));
  //arr.push(Math.random()*100);
}

var sum = 0;
for (var i in arr) {
  console.log(arr[i] + "+");
  sum += arr[i];
}
console.log(sum);

//}
//console.log(sum/99999);
