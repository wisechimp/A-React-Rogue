import React, { useRef, useEffect } from 'react'

export default ({ width, height, tilesize }) => {
  const canvasRef = useRef()

  useEffect(() => {
    console.log("Draw canvas")
    const canvasContext = canvasRef.current.getContext('2d')
    canvasContext.clearRect(0, 0, width * tilesize, height * tilesize)
    canvasContext.fillStyle='#000'
    canvasContext.fillRect(12, 22, 16, 16)
  })

  return (
    <canvas
      ref={canvasRef} 
      width={width * tilesize} 
      height={height * tilesize}
      style={{ border: '1px solid black' }}
    />
)}