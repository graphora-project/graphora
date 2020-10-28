import P5 from '../p5/P5'

const Line = () => {
  const p5 = P5.getInstance()

  const draw = ({
    color,
    strokeWeight,
    initialX,
    initialY,
    finalX,
    finalY,
  }) => {
    p5.stroke(color)
    p5.strokeWeight(strokeWeight)
    p5.line(initialX, initialY, finalX, finalY)
  }

  return { draw }
}

export default Line
