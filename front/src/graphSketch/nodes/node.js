const Node = ({ p5, label, color }) => {
  let xCoordinate = 0
  let yCoordinate = 0
  let radius = 0

  let vector = p5.createVector(xCoordinate, yCoordinate)

  const draw = () => {
    // vector = p5.createVector(xCoordinate, yCoordinate)
    p5.noStroke()
    p5.fill(color)
    // p5.circle(xCoordinate, yCoordinate, radius * 2)
    p5.circle(vector.x, vector.y, radius * 2)

    p5.fill(0)
    p5.textSize(12)
    p5.textAlign(p5.CENTER, p5.CENTER)
    p5.text(label, vector.x, vector.y + radius + 20)
  }

  const setRadius = (_radius) => {
    radius = _radius
  }

  const setXCoordinate = (_xCoordinate) => {
    // xCoordinate = _xCoordinate
    vector.set(_xCoordinate, vector.y)
  }

  const setYCoordinate = (_yCoordinate) => {
    // yCoordinate = _yCoordinate
    vector.set(vector.x, _yCoordinate)
  }

  const getRadius = () => radius
  const getXCoordinate = () => vector.x
  const getYCoordinate = () => vector.y

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
