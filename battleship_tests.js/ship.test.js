import ship from "../src/ships";

//ship function tests
let boat;
beforeEach(() => {
  boat = ship("carrier", 4, [1, 2, 3, 4]);
});

test("hit", () => {
  boat.hit(1);
  expect(boat.hitsTaken).toEqual([1]);
});

test("boat sunk ?", () => {
  boat.hit(1);
  boat.hit(2);
  boat.hit(3);
  boat.hit(4);
  expect(boat.isSunk()).toBe(true);
});

test("boat not sunk ?", () => {
  boat.hit(1);
  boat.hit(2);
  boat.hit(3);
  expect(boat.isSunk()).toBe(false);
});
