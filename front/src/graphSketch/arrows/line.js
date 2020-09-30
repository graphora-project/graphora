const Line = ({ p5, initialX, initialY, finalX, finalY }) => {
  const draw = ({ color, weight }) => {
    p5.stroke(color)
    p5.strokeWeight(weight)
    p5.line(initialX, initialY, finalX, finalY)
  }

  return [draw]
}

export default Line
