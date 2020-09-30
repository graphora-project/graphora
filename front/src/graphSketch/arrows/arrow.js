import Line from './line'

const Arrow = ({ p5, initialX, initialY, finalX, finalY }) => {
  const strokeWeight = 1
  const color = '#242424'

  const endVector = p5.createVector(finalX - initialX, finalY - initialY)
  const baseVector = p5.createVector(0, 0)

  const [lineDraw] = Line({
    p5,
    initialX: baseVector.x,
    initialY: baseVector.y,
    finalX: endVector.x,
    finalY: endVector.y,
  })

  const draw = () => {
    p5.translate(initialX, initialY)
    lineDraw({ color, strokeWeight })
  }

  return [draw, color, strokeWeight, baseVector, endVector]
}

export default Arrow
