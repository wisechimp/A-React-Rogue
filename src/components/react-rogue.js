import React, { useRef, useEffect, useState } from 'react'
import InputManager from '../gameclasses/input-manager'
import World from '../gameclasses/world'
import Spawner from '../gameclasses/spawner'

export default ({ width, height, tilesize }) => {
  const canvasRef = useRef()
  const [world, setWorld] = useState(new World(width, height, tilesize))
  let inputManager = new InputManager()
  const handleInput = (action, data) => {
    console.log(`handle input: ${action}:${JSON.stringify(data)}`)
    let newWorld = new World()
    Object.assign(newWorld, world)
    newWorld.movePlayer(data.x, data.y)
    setWorld(newWorld)
  }

  useEffect(() => {
    let newWorld = new World();
    Object.assign(newWorld, world);
    newWorld.createCellularMap();
    newWorld.createEntityInSpace(world.player)
    let spawner = new Spawner(newWorld)
    spawner.spawnLoot(10)
    setWorld(newWorld);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Binding the inputs so the key entry can be recognised
  useEffect(() => {
    console.log('Bind input')
    inputManager.bindKeys()
    inputManager.subscribe(handleInput)
    return () => {
      inputManager.unbindKeys()
      inputManager.unsubscribe(handleInput)
    }
  })

  // Drawing the canvas with the World and the Player
  useEffect(() => {
    console.log("Draw to canvas")
    const canvasContext = canvasRef.current.getContext('2d')
    canvasContext.clearRect(0, 0, width * tilesize, height * tilesize)
    world.draw(canvasContext)
  })

  return (
    <canvas
      ref={canvasRef} 
      width={width * tilesize} 
      height={height * tilesize}
      style={{ 
        border: '1px solid black',
        background: 'dimgrey' }}
    />
)}