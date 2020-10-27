import P5 from '../p5/P5'

const Node = ({ label, color }) => {
  const p5 = P5.getInstance()
  const initialXCoordinate = 0
  const initialYCoordinate = 0
  let radius = 0

  const vector = p5.createVector(initialXCoordinate, initialYCoordinate)

  const draw = () => {
    p5.noStroke()
    p5.fill(color)
    p5.circle(vector.x, vector.y, radius * 2)

    p5.fill(0)
    p5.textSize(12)
    p5.textAlign(p5.CENTER, p5.CENTER)
    p5.text(label, vector.x, vector.y - radius - 15)
  }

  const setRadius = (_radius) => {
    radius = _radius
  }

  const setXCoordinate = (_xCoordinate) => {
    vector.set(_xCoordinate, vector.y)
  }

  const setYCoordinate = (_yCoordinate) => {
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
