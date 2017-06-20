//variables
var a = 0;
var b = 0;
var c = "";
var menory = 0;
var OppSwitch = 0;
var VarSwitch = 0;

//Keypad functions.
function KeypadNumSumA() {
  console.log(a = a + 1);
}

function KeypadNumSumB() {
  console.log(b = b + 1);
}



function num() {
  if (VarSwitch === 0) {
    KeypadNumSumA();
  } else if (VarSwitch === 1) {
    KeypadNumSumB();
  }
  
function PlusFn() {
  OppSwitch = 1;
}

function MinusFn() {
  OppSwitch = 1;
}

function DivideFn() {
  OppSwitch = 1;
}

function MultiplyFn() {
  OppSwitch = 1;
}






function clearVariables() {
  a = 0;
  b = 0;
  c = "";
  menory = 0;
  OppSwitch = 0;
  VarSwitch = 0;

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
