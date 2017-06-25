//variables
var value_one = 0;
var value_two = 0;
var Opp = "";
var memoryBank = 0;
var OppSwitch = "";
var VarSwitch = false;
var KeyCount = 0;
var keyVal = 0;
var imputScreen = [];
var screenTemp = 0;

//Keypad functions.
function num(keyVal) {
  imputScreen.push(keyVal);
  var screenTemp = imputScreen.join('');
  var number = Number(screenTemp);
  document.getElementsByClassName("screen")[0].innerHTML = screenTemp;
  if (VarSwitch === false) {
    value_one = number;
  } else if (VarSwitch === true) {
    value_two = number;
  }
}

function PlusFn() {
  VarSwitch = true;
  console.log('VarSwitch is ' + VarSwitch);
  OppSwitch = "PlusFnTrue";
  document.getElementsByClassName("screen")[0].innerHTML = '';
  console.log(imputScreen.length = 0);
}

function MinusFn() {
  VarSwitch = true;
  OppSwitch = "MinusFnTrue";
  document.getElementsByClassName("screen")[0].innerHTML = '';
  console.log(imputScreen.length = 0);
}

function DivideFn() {
  VarSwitch = true;
  OppSwitch = "DivideFnTrue";
  document.getElementsByClassName("screen")[0].innerHTML = '';
  console.log(imputScreen.length = 0);
}

function MultiplyFn() {
  VarSwitch = true;
  OppSwitch = "MultiplyFnTrue";
  document.getElementsByClassName("screen")[0].innerHTML = '';
  console.log(imputScreen.length = 0);
}

function Answer() {

  if (OppSwitch == "PlusFnTrue") {
    memoryBank = coreMath(value_one, value_two, addMath);
  } else if (OppSwitch == "MinusFnTrue") {
    memoryBank = coreMath(value_one, value_two, minusMath);
  } else if (OppSwitch == "DivideFnTrue") {
    memoryBank = coreMath(value_one, value_two, divideMath);
  } else if (OppSwitch == "MultiplyFnTrue") {
    memoryBank = coreMath(value_one, value_two, multiplyMath);
  } else {
    alert("Please ues an Operation Button");
  }
}

function printAnswer() {
  console.log(memoryBank);
  document.getElementsByClassName("screen")[0].innerHTML = memoryBank;
}

function OnEqualClicked() {
  Answer();
  printAnswer();
  timerClear = setTimeout(clearVariables, 4000);
}


function clearVariables() {
  console.log(imputScreen.length = 0);
  console.log(document.getElementsByClassName("screen")[0].innerHTML = '');
}

//Operation functions
function coreMath(value_one, value_two, Opp) {
  return Opp(value_one, value_two);
}

function addMath(value_one, value_two) {
  return value_one + value_two;
}

function minusMath(value_one, value_two) {
  return value_one - value_two;
}

function divideMath(value_one, value_two) {
  return value_one / value_two;
}

function multiplyMath(value_one, value_two) {
  return value_one * value_two;
}
