import React, { useEffect, useRef } from 'react'

const Canvas = (props) => {
  const canvasRef = useRef(null)
  const diameter = 30
  const radius = diameter / 2
  let canvas
  let ctx

  console.log('props at canvas', props)

  const drawCicle = (color) => {
    ctx.beginPath()
    ctx.fillStyle = color
    ctx.arc(radius, radius, radius, 0, 2 * Math.PI)
    ctx.fill()
    //ctx.stroke()
  }

  const drawAvatatar = () => {
    ctx.beginPath()
    ctx.fillStyle = '#000'
    ctx.arc(radius, radius / 1.7, radius / 2, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(radius, radius * 2, radius - 1, Math.PI, 0)
    ctx.stroke()
  }

  const drawLetter = (letter) => {
    ctx.beginPath()
    ctx.font = '30px Arial'
    ctx.fillStyle = '#fff'
    ctx.textAlign = 'center'
    ctx.fillText(letter, radius, radius + 10)
  }

  useEffect(() => {
    canvas = canvasRef.current
    ctx = canvas.getContext('2d')
    canvas.width = diameter
    canvas.height = diameter
    let circleColor = '#fff'

    if (props.draw === 'avatar') {
      drawCicle(circleColor)
      drawAvatatar()
    } else {
      circleColor = '#369'
      drawCicle(circleColor)
      drawLetter(props.draw)
    }
  }, [])

  return <canvas ref={canvasRef} {...props} />
}

export default Canvas
