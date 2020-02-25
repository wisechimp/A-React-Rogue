import Entity from './entity'

class Player extends Entity {
  inventory = []

  attributes = {
    name: "Player",
    ascii: "@",
    health: 10,
    color: "#ff0000",
    offset: {
      x: 0,
      y: 12
    }
  };

  move(dx, dy) {
    if (this.attributes.health <= 0) {
      return
    }
    this.x += dx;
    this.y += dy;
  }

  add(item) {
    this.inventory.push(item)
  }

  copyPlayer() {
    let newPlayer = new Player();
    Object.assign(newPlayer, this);
    return newPlayer;
  }
}

export default Player