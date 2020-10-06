const Node = ({ p5, xCoordinate, yCoordinate, label, color }) => {
  let radius = 0

  const draw = () => {
    p5.noStroke()
    p5.fill(color)
    p5.circle(xCoordinate, yCoordinate, radius * 2)

    p5.fill(0)
    p5.textSize(12)
    p5.textAlign(p5.CENTER, p5.CENTER)
    p5.text(label, xCoordinate, yCoordinate + radius + 20)
  }

  const setRadius = (_radius) => {
    radius = _radius
  }

  return { draw, setRadius }
}

export default Node
