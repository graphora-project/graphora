const Line = ({ p5 }) => {
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
