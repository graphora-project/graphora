import Triangle from './triangle'

const RightTriangle = ({ p5, pointerX, pointerY }) => {
  const [baseTriangleDraw, height, baseWidth, setPoints] = Triangle({ p5 })

  const pointX2 = pointerX - height
  const pointY2 = pointerY + baseWidth / 2

  const pointX3 = pointX2
  const pointY3 = pointerY - baseWidth / 2

  setPoints({
    pointX: pointerX,
    pointY: pointerY,
    pointX2,
    pointY2,
    pointX3,
    pointY3,
  })

  const draw = ({ color }) => {
    baseTriangleDraw({ color })
  }

  return [draw]
}

export default RightTriangle
