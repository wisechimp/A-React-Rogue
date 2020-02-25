import Loot from './loot'
import Monster from './monster'

const lootTable = [
  {
    name: "Longsword",
    color: "darkgrey",
    ascii: "/",
    offset: {
      x: 6,
      y: 14
    }
  },
  {
    name: "Health Potion",
    color: "red",
    ascii: "!",
    offset: {
      x: 6,
      y: 14
    }
  },
  {
    name: "Gold Coin",
    color: "yellow",
    ascii: "$",
    offset: {
      x: 3,
      y: 14
    }
  },
  {
    name: "Chainmail",
    color: "lightgrey",
    ascii: "#",
    offset: {
      x: 4,
      y: 14
    }
  }
];

const monsterTable = [
  {
    name: "Bob the Ogre",
    color: "green",
    ascii: "8",
    offset: {
      x: 3,
      y: 14
    },
    health: 6
  },
  {
    name: "Sneaky the Goblin",
    color: "green",
    ascii: "o",
    offset: {
      x: 3,
      y: 12
    },
    health: 2
  },
  {
    name: "Mike the Orc",
    color: "green",
    ascii: "O",
    offset: {
      x: 1,
      y: 14
    },
    health: 4
  },
  {
    name: "Dave the Dragon",
    color: "purple",
    ascii: "D",
    offset: {
      x: 1,
      y: 14
    },
    health: 10
  }
];

class Spawner {
  constructor(world) {
    this.world = world;
  }
  spawn(spawnCount, createEntity) {
    for (let count = 0; count < spawnCount; count++) {
      let entity = createEntity();
      this.world.add(entity);
      this.world.createEntityInSpace(entity);
    }
  }

  spawnLoot(spawnCount) {
    this.spawn(spawnCount, () => {
      return new Loot(
        getRandomInt(this.world.width),
        getRandomInt(this.world.height),
        this.world.tilesize,
        lootTable[getRandomInt(lootTable.length)]
      );
    });
  }

  spawnMonster(spawnCount) {
    this.spawn(spawnCount, () => {
      return new Monster(
        getRandomInt(this.world.width),
        getRandomInt(this.world.height),
        this.world.tilesize,
        monsterTable[getRandomInt(monsterTable.length)]
      );
    });
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

export default Spawner