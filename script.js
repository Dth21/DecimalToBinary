var list = [1];
var reversedList = [];
var resultsArray = [];
var differenceArray = [];

let programRunTimes = 0;
let programRunClass = 0;
let secondaryArrayRunClass = 0;
let secondaryArrayRunTimes = 0;
let result = 0;
let difference = 0;

let multipliersDiv = document.getElementById("multipliers");
let number = document.getElementById("userInput");
let binaryCodeDiv = document.getElementById("binary-code");

function calculate() {
  if (number.value === "") {
    error.style.visibility = "visible";
    error.innerText = "Please input a number";
  } else {
    error.style.visibility = "hidden";

    createArray();
    createSecondArray();

    if (programRunTimes < 1) {
      showArray();
      showSecondArray();
      programRunTimes++;
      secondaryArrayRunTimes++;
    } else {
      replaceArray();
      replaceSecondArray();
    }
  }
}

function createArray() {
  list = [1];
  reversedList = [];
  let double = 1;

  do {
    double = double * 2;
    list.push(double);
  } while (double < number.value);

  for (let q = list.length - 1; q > 0; q--) {
    reversedList.push(list[q]);
  }
  reversedList.push(1);
}

function createSecondArray() {
  resultsArray = [];
  differenceArray = [];
  for (let b = 0; b < reversedList.length; b++) {
    if (reversedList[b] <= number.value) {
      result = 1;
    } else {
      result = 0;
    }
    if (result === 1) {
      difference = number.value - reversedList[b];
      number.value = difference;
    } else {
      difference = number.value;
    }
    resultsArray.push(result);
    differenceArray.push(difference);
  }
}

function showArray() {
  programRunClass = programRunTimes;
  let programRunDiv = document.createElement("div");
  programRunDiv.setAttribute("id", programRunClass);
  programRunDiv.setAttribute(
    "style",
    "  width: 100%; display: flex; flex-direction: row; align-content: center; justify-content: space-evenly; align-items: center;"
  );
  for (let i = 0; i < reversedList.length; i++) {
    let numberDiv = document.createElement("div");
    numberDiv.innerText = reversedList[i];
    numberDiv.setAttribute("class", "number-" + i);
    programRunDiv.appendChild(numberDiv);
  }
  multipliersDiv.appendChild(programRunDiv);
}

function replaceArray() {
  let oldProgramRunDiv = document.getElementById(programRunClass);
  let newProgramRunDiv = document.createElement("div");
  let newProgramRunClass = programRunClass + 1;
  newProgramRunDiv.setAttribute("id", newProgramRunClass);
  newProgramRunDiv.setAttribute(
    "style",
    "  width: 100%; display: flex; flex-direction: row; align-content: center; justify-content: space-evenly; align-items: center;"
  );
  for (let j = 0; j < reversedList.length; j++) {
    let newNumberDiv = document.createElement("div");
    newNumberDiv.innerText = reversedList[j];
    newNumberDiv.setAttribute("class", "number-" + j);
    newProgramRunDiv.appendChild(newNumberDiv);
  }
  programRunClass++;
  multipliersDiv.replaceChild(newProgramRunDiv, oldProgramRunDiv);
}

function showSecondArray() {
  console.log(secondaryArrayRunTimes);
  secondaryArrayRunClass = secondaryArrayRunTimes;
  let secondaryArrayRunDiv = document.createElement("div");
  secondaryArrayRunDiv.setAttribute("id", secondaryArrayRunClass);
  secondaryArrayRunDiv.setAttribute(
    "style",
    "  width: 100%; display: flex; flex-direction: row; align-content: center; justify-content: space-evenly; align-items: center;"
  );
  for (let g = 0; g < resultsArray.length; g++) {
    let resultsDiv = document.createElement("div");
    resultsDiv.innerText = resultsArray[g] + " ( " + differenceArray[g] + " )";
    resultsDiv.setAttribute("class", "binaryCode-" + g);
    secondaryArrayRunDiv.appendChild(resultsDiv);
  }
  binaryCodeDiv.appendChild(secondaryArrayRunDiv);
}

function replaceSecondArray() {
  let oldSecondaryArrayRunDiv = document.getElementById(secondaryArrayRunClass);
  let newSecondaryArrayRunDiv = document.createElement("div");
  let newSecondaryArrayRunClass = secondaryArrayRunClass + 1;
  newSecondaryArrayRunDiv.setAttribute("id", newSecondaryArrayRunClass);
  newSecondaryArrayRunDiv.setAttribute(
    "style",
    "  width: 100%; display: flex; flex-direction: row; align-content: center; justify-content: space-evenly; align-items: center;"
  );

  for (let p = 0; p < resultsArray.length; p++) {
    let newSecondaryResultsDiv = document.createElement("div");
    newSecondaryResultsDiv.innerText =
      resultsArray[p] + " ( " + differenceArray[p] + " )";
    newSecondaryResultsDiv.setAttribute("class", "binaryCode-" + p);
    newSecondaryArrayRunDiv.appendChild(newSecondaryResultsDiv);
  }

  secondaryArrayRunClass++;
  binaryCodeDiv.replaceChild(newSecondaryArrayRunDiv, oldSecondaryArrayRunDiv);
}

function resetPage() {
  window.location.reload();
}

addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    calculate();
  }
});
