const players = () => ({
  randomMove: function (squares) {
    return squares[Math.floor(Math.random() * squares.length)].click();
  },
  playerDisplay: function () {
    const player = document.createElement("div");
    const p = document.createElement("div");
    const pp = document.createElement("div");
    //carrier divs
    for (var i = 0; i < 5; i++) {
      const box = document.createElement("div");
      box.classList.add("carrier");
      pp.appendChild(box);
    }
    //battleship divs
    const ppp = document.createElement("div");
    for (var i = 0; i < 4; i++) {
      const box = document.createElement("div");
      box.classList.add("battleship");
      ppp.appendChild(box);
    }
    //cruiser divs
    const pppp = document.createElement("div");
    for (var i = 0; i < 3; i++) {
      const box = document.createElement("div");
      box.classList.add("cruiser");
      pppp.appendChild(box);
    }
    //submarine divs
    const ppppp = document.createElement("div");
    for (var i = 0; i < 3; i++) {
      const box = document.createElement("div");
      box.classList.add("submarine");
      ppppp.appendChild(box);
    }
    //destroyer divs
    const pppppp = document.createElement("div");
    for (var i = 0; i < 2; i++) {
      const box = document.createElement("div");
      box.classList.add("destroyer");
      pppppp.appendChild(box);
    }
    pp.setAttribute("class", "carrierwrap");
    pp.setAttribute("draggable", "true");
    ppp.setAttribute("class", "battleshipwrap");
    ppp.setAttribute("draggable", "true");
    pppp.setAttribute("class", "cruiserwrap");
    pppp.setAttribute("draggable", "true");
    ppppp.setAttribute("class", "submarinewrap");
    ppppp.setAttribute("draggable", "true");
    pppppp.setAttribute("class", "destroyerwrap");
    pppppp.setAttribute("draggable", "true");
    player.classList.add("player1");
    const p1 = document.createTextNode("Ships");
    player.append(p, pp, ppp, pppp, ppppp, pppppp);
    p.appendChild(p1);

    document.body.appendChild(player);
  },
});

export default players;
