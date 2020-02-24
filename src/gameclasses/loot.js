import Entity from './entity'

class Loot extends Entity {
  action(verb, world) {
    if (verb === 'bump') {
      world.player.add(this)
      world.remove(this)
    }
    if (verb === 'drop') {
      console.log('Drop', this)
    }
  }
}

export default Loot