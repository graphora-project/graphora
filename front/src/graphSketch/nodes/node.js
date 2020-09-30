const Node = ({ p5, xCoordinate, yCoordinate, label }) => {
  const draw = ({ color, diameter }) => {
    p5.noStroke()
    p5.fill(color)
    p5.circle(xCoordinate, yCoordinate, diameter)

    p5.fill(0)
    p5.textSize(12)
    p5.textAlign(p5.CENTER, p5.CENTER)
    p5.text(label, xCoordinate, yCoordinate + diameter / 2 + 20)
  }

  return [draw]
}

export default Node
