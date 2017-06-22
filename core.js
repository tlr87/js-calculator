//variables
var value_one = 0;
var value_two = 0;
var Opp = "";
var memoryBank = 0;
var OppSwitch = "";
var VarSwitch = false;
var KeyCount = 0;
var v = 0;
var imputScreen = [];
var screenTemp = 0;

//Keypad functions.
function num(v) {
  console.log('VarSwitch is ' + VarSwitch);
  imputScreen.push(v);
  var screenTemp = imputScreen.join('');
  var number = Number(screenTemp);
  document.getElementsByClassName("screen")[0].innerHTML = screenTemp;
  if (VarSwitch === false) {
    value_one = number;
    console.log("VarSwitch" + value_one );
  } else if (VarSwitch === true) {
    value_two = number;
    console.log("VarSwitch" + value_two );
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
  console.log(imputScreen.length = 0);
  value_one = 0;
  value_two = 0;
  Opp = "";
  OppSwitch = "";
  VarSwitch = "aVar";
  KeyCount = 0;
  v = 0;
}


function clearVariables() {
  value_one = 0;
  value_two = 0;
  Opp = "";
  memoryBank = 0;
  OppSwitch = "";
  VarSwitch = "aVar";
  KeyCount = 0;
  v = 0;
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
