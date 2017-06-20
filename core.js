//variables
var a = 0;
var b = 0;
var c = "";
var memoryBank = 0;
var OppSwitch = "";
var VarSwitch = "aVar";

//Keypad functions.
function KeypadNumSumA() {
  console.log(a = a + 1);
}

function KeypadNumSumB() {
  console.log(b = b + 1);
}

function num() {
  if (VarSwitch === "aVar") {
    //KeypadNumSumA();
  } else if (VarSwitch === "bVar") {
    //KeypadNumSumB();
  }
}

function PlusFn() {
  OppSwitch = 1;
  OppSwitch = "PlusFnTrue";
}

function MinusFn() {
  OppSwitch = 1;
  OppSwitch = "MinusFnTrue";
}

function DivideFn() {
  OppSwitch = 1;
  OppSwitch = "DivideFnTrue";
}

function MultiplyFn() {
  OppSwitch = 1;
  OppSwitch = "MultiplyFnTrue";
}

function Answer() {
  if (OppSwitch == "PlusFnTrue") {
    return memoryBank + coreMath(a, b, addMath);
  } else if (OppSwitch == "MinusFnTrue") {
    return memoryBank + coreMath(a, b, minusMath);
  } else if (OppSwitch == "DivideFnTrue") {
    return  memoryBank + coreMath(a, b, divideMath);
  } else if (OppSwitch == "MultiplyFnTrue") {
    return memoryBank + coreMath(a, b, multiplyMath);
  } else {
    alert("Please ues an Operation Button");
  }
}

function printAnswer(){
  console.log(memoryBank);
  document.getElementsByClassName("screen")[0].innerHTML = "="+memoryBank;
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

//console.log(coreMath(1, 2, coreOpp("+")));
