//npx prettier --write .
//npm run watch

import _, { remove } from "lodash";
import "./style.css";
import ship from "./ships";
import gameboard from "./gameboard";
import players from "./player";

//declarations
const plays = players();
const game = gameboard();
plays.playerDisplay();
game.leftGrid();
game.rightGrid();

//declarations for drag and drop
const carrier = document.querySelector(".carrierwrap");
const battleship = document.querySelector(".battleshipwrap");
const cruiser = document.querySelector(".cruiserwrap");
const submarine = document.querySelector(".submarinewrap");
const destroyer = document.querySelector(".destroyerwrap");
const leftBox = document.querySelectorAll(".leftBox");
const rightBox = document.querySelectorAll(".rightBox");

//player carrierShip input
const carrierShip = ship("carrier", 5);
const battleShip = ship("battleship", 4);
const cruiserShip = ship("cruiser", 3);
const submarineShip = ship("submarine", 3);
const destroyerShip = ship("destroyer", 2);

//get player ship positions
function playerPositions() {
  let pressArray = [];
  [].slice.call(document.querySelectorAll(".carrier")).forEach(function (el) {
    pressArray.push(el.id);
  });
  [].slice
    .call(document.querySelectorAll(".battleship"))
    .forEach(function (el) {
      pressArray.push(el.id);
    });
  [].slice.call(document.querySelectorAll(".cruiser")).forEach(function (el) {
    pressArray.push(el.id);
  });
  [].slice.call(document.querySelectorAll(".submarine")).forEach(function (el) {
    pressArray.push(el.id);
  });
  [].slice.call(document.querySelectorAll(".destroyer")).forEach(function (el) {
    pressArray.push(el.id);
  });
  game.playerCoordinates.push(...pressArray);
  //console.log(game.playerCoordinates);
}
playerPositions();

//get missed shots
leftBox.forEach((box) => {
  box.addEventListener("click", (event) => {
    game.receiveAttack();
    game.allSunk();
  });
});

//player hit
leftBox.forEach((box) => {
  box.addEventListener("click", (event) => {
    if (event.target.classList.contains("carrier")) {
      carrierShip.hit();
      event.target.classList.add("black");
      carrierShip.isSunk();
    } else if (event.target.classList.contains("battleship")) {
      battleShip.hit();
      event.target.classList.add("black");
      battleShip.isSunk();
    } else if (event.target.classList.contains("cruiser")) {
      cruiserShip.hit();
      event.target.classList.add("black");
      cruiserShip.isSunk();
    } else if (event.target.classList.contains("submarine")) {
      submarineShip.hit();
      event.target.classList.add("black");
      submarineShip.isSunk();
    } else if (event.target.classList.contains("destroyer")) {
      destroyerShip.hit();
      event.target.classList.add("black");
      destroyerShip.isSunk();
    }
  });
});

//computer ship input
const carrierComp = ship("carrierC", 5);
const right1 = document.querySelector(".right1");
const right2 = document.querySelector(".right2");
const right3 = document.querySelector(".right3");
const right4 = document.querySelector(".right4");
const right5 = document.querySelector(".right5");
right1.classList.add(carrierComp.id);
right2.classList.add(carrierComp.id);
right3.classList.add(carrierComp.id);
right4.classList.add(carrierComp.id);
right5.classList.add(carrierComp.id);

//computer battleShip input
const battleComp = ship("battleshipC", 4);
const right13 = document.querySelector(".right13");
const right14 = document.querySelector(".right14");
const right15 = document.querySelector(".right15");
const right16 = document.querySelector(".right16");
right13.classList.add(battleComp.id);
right14.classList.add(battleComp.id);
right15.classList.add(battleComp.id);
right16.classList.add(battleComp.id);

//computer cruiserShip input
const cruiserComp = ship("cruiserC", 3);
const right38 = document.querySelector(".right38");
const right39 = document.querySelector(".right39");
const right40 = document.querySelector(".right40");
right38.classList.add(cruiserComp.id);
right39.classList.add(cruiserComp.id);
right40.classList.add(cruiserComp.id);

//computer submarineShip input
const submarineComp = ship("submarineC", 3);
const right52 = document.querySelector(".right52");
const right53 = document.querySelector(".right53");
const right54 = document.querySelector(".right54");
right52.classList.add(submarineComp.id);
right53.classList.add(submarineComp.id);
right54.classList.add(submarineComp.id);

//computer destroyerShip input
const destroyerComp = ship("destroyerC", 2);
const right82 = document.querySelector(".right82");
const right83 = document.querySelector(".right83");
right82.classList.add(destroyerComp.id);
right83.classList.add(destroyerComp.id);

//get computer ship positions
function compPositions() {
  let pressArray = [];
  [].slice.call(document.querySelectorAll(".carrierC")).forEach(function (el) {
    pressArray.push(el.id);
  });
  [].slice
    .call(document.querySelectorAll(".battleshipC"))
    .forEach(function (el) {
      pressArray.push(el.id);
    });
  [].slice.call(document.querySelectorAll(".cruiserC")).forEach(function (el) {
    pressArray.push(el.id);
  });
  [].slice
    .call(document.querySelectorAll(".submarineC"))
    .forEach(function (el) {
      pressArray.push(el.id);
    });
  [].slice
    .call(document.querySelectorAll(".destroyerC"))
    .forEach(function (el) {
      pressArray.push(el.id);
    });
  game.computerCoordinates.push(...pressArray);
  //console.log(game.playerCoordinates);
}
compPositions();

//get missed shots and computer play
rightBox.forEach((box) => {
  box.addEventListener("click", (event) => {
    game.compReceiveAttack();
    game.allSunk();
    //random computer play
    setTimeout(randomGenerator, 1000);
    //randomGenerator();
    //setTimeout(plays.randomMove, 1000, leftBox);
  });
});

//computer hit
rightBox.forEach((box) => {
  box.addEventListener("click", (event) => {
    if (event.target.classList.contains("carrierC")) {
      carrierComp.hit();
      event.target.classList.add("black");
      carrierComp.isSunk();
    } else if (event.target.classList.contains("battleshipC")) {
      battleComp.hit();
      event.target.classList.add("black");
      battleComp.isSunk();
    } else if (event.target.classList.contains("cruiserC")) {
      cruiserComp.hit();
      event.target.classList.add("black");
      cruiserComp.isSunk();
    } else if (event.target.classList.contains("submarineC")) {
      submarineComp.hit();
      event.target.classList.add("black");
      submarineComp.isSunk();
    } else if (event.target.classList.contains("destroyerC")) {
      destroyerComp.hit();
      event.target.classList.add("black");
      destroyerComp.isSunk();
    }
  });
});

// computer play
const array = Array.from(leftBox);
array.sort(() => Math.random() - 0.5);
//keep global
let index = 0;

//computer play
function randomGenerator() {
  index++;
  //increment by length of array
  index %= array.length;
  array[index].click();
}

//drag and drop
destroyer.addEventListener("dragstart", dragStart);
destroyer.addEventListener("dragend", dragEnd);
submarine.addEventListener("dragstart", dragStart);
submarine.addEventListener("dragend", dragEnd);
cruiser.addEventListener("dragstart", dragStart);
cruiser.addEventListener("dragend", dragEnd);
battleship.addEventListener("dragstart", dragStart);
battleship.addEventListener("dragend", dragEnd);
carrier.addEventListener("dragstart", dragStart);
carrier.addEventListener("dragend", dragEnd);

for (const empty of leftBox) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

let dragItem = null;

function dragStart() {
  //console.log("start");
  dragItem = this;
}

function dragEnd() {
  //console.log("end");
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {
  //console.log("leave");
}

function dragDrop() {
        if (dragItem == carrier) {
            const one = event.target;
            const two = event.target.nextElementSibling;
            const three = two.nextElementSibling;
            const four = three.nextElementSibling;
            const five = four.nextElementSibling;
            one.classList.add(carrierShip.id);
            two.classList.add(carrierShip.id);
            three.classList.add(carrierShip.id);
            four.classList.add(carrierShip.id);
            five.classList.add(carrierShip.id);
            playerPositions();
}else if(dragItem == battleship){
  const one = event.target;
            const two = event.target.nextElementSibling;
            const three = two.nextElementSibling;
            const four = three.nextElementSibling;
            one.classList.add(battleShip.id);
            two.classList.add(battleShip.id);
            three.classList.add(battleShip.id);
            four.classList.add(battleShip.id);
            playerPositions();
}else if(dragItem == cruiser){
  const one = event.target;
            const two = event.target.nextElementSibling;
            const three = two.nextElementSibling;
            one.classList.add(cruiserShip.id);
            two.classList.add(cruiserShip.id);
            three.classList.add(cruiserShip.id);
            playerPositions();
}else if(dragItem == submarine){
  const one = event.target;
            const two = event.target.nextElementSibling;
            const three = two.nextElementSibling;
            const four = three.nextElementSibling;
            one.classList.add(submarineShip.id);
            two.classList.add(submarineShip.id);
            three.classList.add(submarineShip.id);
            playerPositions();
}else if(dragItem == destroyer){
             const one = event.target;
            const two = event.target.nextElementSibling;
            one.classList.add(destroyerShip.id);
            two.classList.add(destroyerShip.id);
            playerPositions();
}
};
