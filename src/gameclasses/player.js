import Entity from './entity'

class Player extends Entity {
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
    this.x += dx;
    this.y += dy;
  }

  copyPlayer() {
    let newPlayer = new Player();
    Object.assign(newPlayer, this);
    return newPlayer;
  }
}

export default Player