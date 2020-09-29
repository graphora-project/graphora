const Node = ({ p5, xCoordinate, yCoordinate, label }) => {
  const draw = ({ color, ratio }) => {
    p5.fill(color)
    p5.stroke(0)
    p5.ellipse(xCoordinate, yCoordinate, ratio, ratio)

    p5.fill(0)
    p5.textSize(12)
    p5.textAlign(p5.CENTER, p5.CENTER)
    p5.text(label, xCoordinate, yCoordinate + ratio)
  }

  return [draw]
}

export default Node
