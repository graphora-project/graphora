const Line = ({ p5, initialX, initialY, finalX, finalY }) => {
  const draw = ({ color, strokeWeight }) => {
    p5.stroke(color)
    p5.strokeWeight(strokeWeight)
    p5.line(initialX, initialY, finalX, finalY)
  }

  return [draw]
}

export default Line
