//variables
var a = 0;
var b = 0;
var c = "";
var memoryBank = 0;
var OppSwitch = "";
var VarSwitch = false;
var KeyCount = 0;
var v = 0;
var imputScreen = [];
var screenTemp = 0;

//Keypad functions.
function KeypadNumSumA() {
  console.log(a = a + 1);
}

function KeypadNumSumB() {
  console.log(b = b + 1);
}

function num(v) {
  console.log('VarSwitch is ' + VarSwitch);
  imputScreen.push(v);
  var screenTemp = imputScreen.join('');
  var number = Number(screenTemp);
  document.getElementsByClassName("screen")[0].innerHTML = screenTemp;
  //memoryBank = number;
  if (VarSwitch === false) {
    a = number;
    console.log("VarSwitch" + a);
  } else if (VarSwitch === true) {
    b = number;
    console.log("VarSwitch" + b);
  }
  //console.log('memoryBank is ' + memoryBank);
}

function PlusFn() {
  VarSwitch = true;
  console.log('VarSwitch is ' + VarSwitch);
  OppSwitch = "PlusFnTrue";
  //document.getElementsByClassName("screen")[0].innerHTML = "+";
  document.getElementsByClassName("screen")[0].innerHTML = '';
}

function MinusFn() {
  VarSwitch = true;
  OppSwitch = "MinusFnTrue";
  //document.getElementsByClassName("screen")[0].innerHTML = "-";
  document.getElementsByClassName("screen")[0].innerHTML = '';
}

function DivideFn() {
  VarSwitch = true;
  OppSwitch = "DivideFnTrue";
  //document.getElementsByClassName("screen")[0].innerHTML = "÷";
  document.getElementsByClassName("screen")[0].innerHTML = '';
}

function MultiplyFn() {
  VarSwitch = true;
  OppSwitch = "MultiplyFnTrue";
  //document.getElementsByClassName("screen")[0].innerHTML = "x";
  document.getElementsByClassName("screen")[0].innerHTML = '';
}

function Answer() {

  if (OppSwitch == "PlusFnTrue") {
    alert("Hello you chump!");
    memoryBank = coreMath(a, b, addMath);
  } else if (OppSwitch == "MinusFnTrue") {
    memoryBank = coreMath(a, b, minusMath);
  } else if (OppSwitch == "DivideFnTrue") {
    memoryBank = coreMath(a, b, divideMath);
  } else if (OppSwitch == "MultiplyFnTrue") {
    memoryBank = coreMath(a, b, multiplyMath);
  } else {
    alert("Please ues an Operation Button");
  }
}

function printAnswer() {
  console.log(memoryBank);
  document.getElementsByClassName("screen")[0].innerHTML = memoryBank;
}

function OnEqualClicked(){
  Answer();
  printAnswer();
}


function clearVariables() {
  a = 0;
  b = 0;
  c = "";
  memoryBank = 0;
  OppSwitch = "";
  VarSwitch = "aVar";
  KeyCount = 0;
  v = 0;
  console.log(imputScreen.length = 0);
  console.log(document.getElementsByClassName("screen")[0].innerHTML = '');
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
