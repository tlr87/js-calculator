
var testVar = 1;
console.log(testVar+"Pre");


function test(){
  testVar = 99;
}

test();

console.log(testVar+"Post");
