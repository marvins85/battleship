const ship = (id, length) => ({
  id,
  length,
  hitsTaken: [],
  hit: function () {
    this.hitsTaken.push(event.target.id);
    console.log(this.hitsTaken);
  },
  isSunk: function () {
    if (this.hitsTaken.length === this.length) {
      console.log(id + " is sunk");
    }
  },
});

export default ship;
