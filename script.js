var list = [1];
var reversedList = [];

let programRunTimes = 0;
let programRunClass = 0;

let multipliersDiv = document.getElementById("multipliers");
let number = document.getElementById("userInput");
let binaryCodeDiv = document.getElementById("binary-code");

/*
if there is not user input show then show error
if there is user input, hide error and run program
*/

function calculate() {
  if (number.value === "") {
    error.style.visibility = "visible";
    error.innerText = "Please input a number";
  } else {
    error.style.visibility = "hidden";
    if (programRunTimes < 1) {
      createArray();
      showArray();
      programRunTimes++;
    } else {
      createArray();
      replaceArray();
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
  let lastNumberInList = list[list.length - 1];

  for (let q = list.length - 1; q > 0; q--) {
    reversedList.push(list[q]);
  }
  reversedList.push(1);

  /* for (let a = 0; a <= reversedList.length - 1; a++) {
    console.log(a, reversedList[a]);
  }
    
    Just for testing purposes
    */
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

function resetPage() {
  window.location.reload();
}

addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    calculate();
  }
});
