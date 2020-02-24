import React, { useRef, useEffect, useState } from 'react'
import InputManager from '../gameclasses/input-manager'
import Player from '../gameclasses/player'
import World from '../gameclasses/world'

export default ({ width, height, tilesize }) => {
  const canvasRef = useRef()
  const [player, setPlayer] = useState(new Player(1, 2, tilesize))
  const [world, setWorld] = useState(new World(width, height, tilesize))
  let inputManager = new InputManager()
  const handleInput = (action, data) => {
    console.log(`handle input: ${action}:${JSON.stringify(data)}`)
    console.log(player)
    let newPlayer = new Player()
    Object.assign(newPlayer, player)
    newPlayer.move(data.x, data.y)
    console.log(newPlayer)
    setPlayer(newPlayer)
  }

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
    player.draw(canvasContext)
  })

  return (
    <canvas
      ref={canvasRef} 
      width={width * tilesize} 
      height={height * tilesize}
      style={{ border: '1px solid black' }}
    />
)}