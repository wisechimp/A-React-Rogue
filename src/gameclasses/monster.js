import Entity from './entity'

class Monster extends Entity {
  action(verb, world) {
    if (verb === 'bump') {
      // Attacking
      world.addToHistory(`Player attacks ${this.attributes.name}!`)
      // We can go to town here factoring in better weapons, skills and monsters
      this.attributes.health = this.attributes.health - 1
      if (this.attributes.health <= 0) {
        world.addToHistory(`${this.attributes.name} dies!`)
        world.remove(this)
      } else {
        world.addToHistory(`${this.attributes.name}'s health = ${this.attributes.health}`)
        // We can also alter this to reflect various attributes of things
        world.player.attributes.health = world.player.attributes.health - 1
        if (world.player.attributes.health <= 0) {
          world.addToHistory('Chin up, you\'ve died')
        } else {
          world.addToHistory(`You have ${world.player.attributes.health} health.`)
        }
      }
    }
  }
}

export default Monster