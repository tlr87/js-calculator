var a = 0;
var b = 0;
var c = "";


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

function getMathOperation(z) {
  switch (z) {
    case "+":
      return addMath;
    case "-":
      return minusMath;
    case "÷":
      return divideMath;
    case "x":
      return multiplyMath;
      case "=":
      return coreMath;
  }
}


console.log(addMath(1, 2));
console.log(coreMath(1, 2, addMath));
console.log(coreMath(1, 2, getMathOperation("+")));


//"25+6-10" - > calculatorfunc - > answer
//minusMath(addMath(25, 6), 10)

var history = ["25","+", "6","="]
var firstnumber = Number(history[0])
var firstoperation = getMathOperation(history[1])
var secondnumber = Number(history[2])
var secondOperation = getMathOperation(history[3])
