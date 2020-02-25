import Entity from './entity'
import Spawner from './spawner'

class Stairs extends Entity {
  attributes = {
    name: 'Stairs',
    color: 'black',
    ascii: '>',
    offset: {
      x: 3,
      y: 14
    }
  }

  action(verb, world) {
    if (verb === 'bump'){
      world.addToHistory('You move down the stairs...')
      world.createCellularMap()
      world.player.x = 0
      world.player.y = 0
      world.createEntityInSpace(world.player)
      world.entities = world.entities.filter(e => e === world.player)
      let spawner = new Spawner(world)
      spawner.spawnLoot(10)
      spawner.spawnMonster(6)
      spawner.spawnStairs()
    }
  }
}

export default Stairs