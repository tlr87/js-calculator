//variables
var a = 0;
var b = [1];
var c = "";




//Keypad functions.
function one(){
console.log(1);
a=a+1;
}




//Operation functions
function coreMath(a, b, c) {
  return c(a, b);
}

function addMath(a, b) {
  return a + b;
}

function minusMath(a, b) {
  return a - b;
}

function divideMath(a, b) {
  return a / b;
}

function multiplyMath(a, b) {
  return a * b;
}





function coreOpp(z) {
  switch (z) {
    case "+":
      return addMath;
    case "-":
      return minusMath;
    case "÷":
      return divideMath;
    case "x":
      return multiplyMath;
  }
}
console.log(addMath(1, 2));
console.log(coreMath(1, 2, addMath));
console.log(coreMath(1, 2, coreOpp("+")));
//"25+6-10" - > calculatorfunc - > answer
//minusMath(addMath(25, 6), 10)
