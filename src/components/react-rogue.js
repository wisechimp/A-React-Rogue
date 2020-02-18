import React, { useRef, useEffect, useState } from 'react'
import InputManager from '../input-manager'
import Player from '../player'
import World from '../world'

export default ({ width, height, tilesize }) => {
  const canvasRef = useRef()
  const [player, setPlayer] = useState(new Player(1, 2, tilesize))
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

  useEffect(() => {
    console.log('Bind input')
    inputManager.bindKeys()
    inputManager.subscribe(handleInput)
    return () => {
      inputManager.unbindKeys()
      inputManager.unsubscribe(handleInput)
    }
  })

  useEffect(() => {
    console.log("Draw to canvas")
    const canvasContext = canvasRef.current.getContext('2d')
    canvasContext.clearRect(0, 0, width * tilesize, height * tilesize)
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