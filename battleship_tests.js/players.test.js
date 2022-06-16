import players from "../src/player";
import ship from "../src/ships";
import gameboard from "../src/gameboard";
import { random } from "lodash";

let play;
let game;
let boat;

beforeEach(() => {
  boat = ship();
  game = gameboard();
  play = players("marv", "computer", "marv", 64);
});

test("take turns", () => {
  play.takeTurns();
  expect("marv").toEqual("marv");
});

test("random number", () => {
  const plays = play.randomMove(64);
  expect(plays).toBeGreaterThanOrEqual(0);
  expect(plays).toBeLessThanOrEqual(64);
});

test("legal moves", () => {
  expect(play.legalMoves()).toEqual(play.computerPlay());
});
