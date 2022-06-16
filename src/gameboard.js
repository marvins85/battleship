const gameboard = () => ({
  playerCoordinates: [],
  computerCoordinates: [],
  playerHit: [],
  compHit: [],
  compReceiveAttack: function () {
    if (this.computerCoordinates.includes(event.target.id)) {
      this.compHit.push("hit");
      //console.log(this.compHit);
    } else {
      event.currentTarget.classList = "x";
      // console.log("miss");
    }
  },
  receiveAttack: function () {
    if (this.playerCoordinates.includes(event.target.id)) {
      this.playerHit.push("hit");
      //console.log(this.playerCoordinates);
    } else {
      event.currentTarget.classList = "x";
      // console.log("miss");
    }
  },
  allSunk: function () {
    if (this.playerHit.length === 17) {
      alert("Comp wins");
    } else if (this.compHit.length === 17) {
      alert("player wins");
    }
  },
  leftGrid: function () {
    const content = document.querySelector(".content");
    const div1 = document.createElement("div");
    div1.classList.add("left");
    div1.setAttribute("id", "leftSide");
    content.appendChild(div1);
    let left = document.querySelector(".left");
    for (var i = 1; i < 101; i++) {
      const box = document.createElement("div");
      box.classList.add("leftBox");
      box.classList.add("left" + i);
      box.setAttribute("id", i);
      left.appendChild(box);
    }
  },
  rightGrid: function () {
    const content = document.querySelector(".content");
    const div1 = document.createElement("div");
    div1.classList.add("right");
    div1.setAttribute("id", "rightSide");
    content.appendChild(div1);
    let right = document.querySelector(".right");
    for (var i = 1; i < 101; i++) {
      const box = document.createElement("div");
      box.classList.add("rightBox");
      box.classList.add("right" + i);
      box.setAttribute("id", i);
      right.appendChild(box);
    }
  },
});

export default gameboard;
