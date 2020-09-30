import RightTriangle from './rightTriangle'
import Arrow from './arrow'

export const OutArrow = ({ p5, initialX, initialY, finalX, finalY }) => {
  const [arrowDraw, color, strokeWeight, baseVector, endVector] = Arrow({
    p5,
    initialX,
    initialY,
    finalX,
    finalY,
  })

  const [triangleDraw] = RightTriangle({
    p5,
    pointerX: 0,
    pointerY: 0,
  })

  const draw = () => {
    p5.push()
    arrowDraw()
    p5.translate(endVector.x, endVector.y)
    p5.rotate(endVector.heading())
    triangleDraw({ color, strokeWeight })
    p5.pop()
  }

  return {
    draw,
  }
}
