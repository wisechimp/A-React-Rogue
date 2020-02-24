import Entity from './entity'

class Loot extends Entity {
  action(verb, world) {
    if (verb === 'bump') {
      console.log('Pickup', this)
    }
    if (verb === 'drop') {
      console.log('Drop', this)
    }
  }
}

export default Loot