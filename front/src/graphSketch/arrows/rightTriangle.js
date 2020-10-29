import Triangle from './triangle'

const RightTriangle = () => {
  let pointerX
  let pointerY

  const baseTriangle = Triangle()

  const setPointerX = (_pointerX) => {
    pointerX = _pointerX
  }

  const setPointerY = (_pointerY) => {
    pointerY = _pointerY
  }

  const draw = ({ color, strokeWeight }) => {
    const pointX2 = pointerX - baseTriangle.height
    const pointY2 = pointerY + baseTriangle.baseWidth / 2

    const pointX3 = pointX2
    const pointY3 = pointerY - baseTriangle.baseWidth / 2

    baseTriangle.setPoints({
      pointX: pointerX,
      pointY: pointerY,
      pointX2,
      pointY2,
      pointX3,
      pointY3,
    })
    baseTriangle.draw({ color, strokeWeight })
  }

  return { draw, setPointerX, setPointerY }
}

export default RightTriangle
