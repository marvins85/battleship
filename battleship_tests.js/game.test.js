import gameboard from "../src/gameboard";
import ship from "../src/ships";

//gameboard function tests
let game;
let boat;
beforeEach(() => {
  game = gameboard(10);
  boat = ship();
});

test("placement of boat", () => {
  game.place();
  expect(game.boatPlacement).toEqual([10]);
});

test("attack ?", () => {
  game.receiveAttack();
  expect(game.miss).toEqual([10]);
});

test("all sunk ?", () => {
  game.allSunk();
  expect(boat.hitsTaken).toEqual([]);
});
