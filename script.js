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
  // checks if there is a value to be calculated
  if (number.value === "") {
    error.style.visibility = "visible";
    error.innerText = "Please input a number";
  } else {
    error.style.visibility = "hidden";

    createArray();
    createSecondArray();

    // both divs need to be modified at user input, so the first time it creates the divs, and the second time it replaces the already existent divs
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

// it creates the first set of values based on this formula: b=a*2 and then it reverses the list for show
function createArray() {
  list = [1];
  reversedList = [];
  let double = 1;

  do {
    double = double * 2;
    list.push(double);
  } while (double < number.value);

  for (let caRunner = list.length - 1; caRunner >= 0; caRunner--) {
    reversedList.push(list[caRunner]);
  }
}

// it calculates the binary code
function createSecondArray() {
  resultsArray = [];
  differenceArray = [];
  for (let csaRunner = 0; csaRunner < reversedList.length; csaRunner++) {
    if (reversedList[csaRunner] <= number.value) {
      result = 1;
    } else {
      result = 0;
    }
    if (result === 1) {
      difference = number.value - reversedList[csaRunner];
      number.value = difference;
    } else {
      difference = number.value;
    }
    resultsArray.push(result);
    differenceArray.push(difference);
  }
}

// displays the first div
function showArray() {
  programRunClass = programRunTimes;
  let programRunDiv = document.createElement("div");
  programRunDiv.setAttribute("id", programRunClass);
  programRunDiv.setAttribute(
    "style",
    "  width: 100%; display: flex; flex-direction: row; align-content: center; justify-content: space-evenly; align-items: center;"
  );
  for (let saRunner = 0; saRunner < reversedList.length; saRunner++) {
    let numberDiv = document.createElement("div");
    numberDiv.innerText = reversedList[saRunner];
    numberDiv.setAttribute("class", "number-" + saRunner);
    programRunDiv.appendChild(numberDiv);
  }
  multipliersDiv.appendChild(programRunDiv);
}

// displays div with the result, in this case the binary code
function showSecondArray() {
  console.log(secondaryArrayRunTimes);
  secondaryArrayRunClass = secondaryArrayRunTimes;
  let secondaryArrayRunDiv = document.createElement("div");
  secondaryArrayRunDiv.setAttribute("id", secondaryArrayRunClass);
  secondaryArrayRunDiv.setAttribute(
    "style",
    "  width: 100%; display: flex; flex-direction: row; align-content: center; justify-content: space-evenly; align-items: center;"
  );
  for (let ssaRunner = 0; ssaRunner < resultsArray.length; ssaRunner++) {
    let resultsDiv = document.createElement("div");
    resultsDiv.innerText =
      resultsArray[ssaRunner] + " ( " + differenceArray[ssaRunner] + " )";
    resultsDiv.setAttribute("class", "binaryCode-" + ssaRunner);
    secondaryArrayRunDiv.appendChild(resultsDiv);
  }
  binaryCodeDiv.appendChild(secondaryArrayRunDiv);
}

// replace first div
function replaceArray() {
  let oldProgramRunDiv = document.getElementById(programRunClass);
  let newProgramRunDiv = document.createElement("div");
  let newProgramRunClass = programRunClass + 1;
  newProgramRunDiv.setAttribute("id", newProgramRunClass);
  newProgramRunDiv.setAttribute(
    "style",
    "  width: 100%; display: flex; flex-direction: row; align-content: center; justify-content: space-evenly; align-items: center;"
  );
  for (let raRunner = 0; raRunner < reversedList.length; raRunner++) {
    let newNumberDiv = document.createElement("div");
    newNumberDiv.innerText = reversedList[raRunner];
    newNumberDiv.setAttribute("class", "number-" + raRunner);
    newProgramRunDiv.appendChild(newNumberDiv);
  }
  programRunClass++;
  multipliersDiv.replaceChild(newProgramRunDiv, oldProgramRunDiv);
}

// replace the second div with the new calculated values
function replaceSecondArray() {
  let oldSecondaryArrayRunDiv = document.getElementById(secondaryArrayRunClass);
  let newSecondaryArrayRunDiv = document.createElement("div");
  let newSecondaryArrayRunClass = secondaryArrayRunClass + 1;
  newSecondaryArrayRunDiv.setAttribute("id", newSecondaryArrayRunClass);
  newSecondaryArrayRunDiv.setAttribute(
    "style",
    "  width: 100%; display: flex; flex-direction: row; align-content: center; justify-content: space-evenly; align-items: center;"
  );

  for (let rsaRunner = 0; rsaRunner < resultsArray.length; rsaRunner++) {
    let newSecondaryResultsDiv = document.createElement("div");
    newSecondaryResultsDiv.innerText =
      resultsArray[rsaRunner] + " ( " + differenceArray[rsaRunner] + " )";
    newSecondaryResultsDiv.setAttribute("class", "binaryCode-" + rsaRunner);
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
