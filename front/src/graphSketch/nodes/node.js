const Node = ({ p5, label, color }) => {
  let xCoordinate = 0
  let yCoordinate = 0
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

  const setXCoordinate = (_xCoordinate) => {
    xCoordinate = _xCoordinate
  }

  const setYCoordinate = (_yCoordinate) => {
    yCoordinate = _yCoordinate
  }

  const getRadius = () => radius
  const getXCoordinate = () => xCoordinate
  const getYCoordinate = () => yCoordinate

  return {
    draw,
    setRadius,
    getRadius,
    setXCoordinate,
    setYCoordinate,
    getXCoordinate,
    getYCoordinate,
  }
}

export default Node
