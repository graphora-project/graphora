const Triangle = ({ p5 }) => {
  const height = 5
  const baseWidth = 3
  let point1X
  let point1Y
  let point2X
  let point2Y
  let point3X
  let point3Y

  const setPoints = ({
    pointX,
    pointY,
    pointX2,
    pointY2,
    pointX3,
    pointY3,
  }) => {
    point1X = pointX
    point1Y = pointY
    point2X = pointX2
    point2Y = pointY2
    point3X = pointX3
    point3Y = pointY3
  }
  const draw = ({ color, strokeWeight }) => {
    p5.fill(color)
    p5.stroke(color)
    p5.strokeWeight(strokeWeight)
    p5.triangle(point1X, point1Y, point2X, point2Y, point3X, point3Y)
  }

  return { draw, height, baseWidth, setPoints }
}

export default Triangle
