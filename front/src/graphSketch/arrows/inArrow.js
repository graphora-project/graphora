import LeftTriangle from './leftTriangle'
import Arrow from './arrow'

export const InArrow = ({ p5, initialX, initialY, finalX, finalY }) => {
  const [arrowDraw, color, strokeWeight, baseVector, endVector] = Arrow({
    p5,
    initialX,
    initialY,
    finalX,
    finalY,
  })

  const [triangleDraw] = LeftTriangle({
    p5,
    pointerX: baseVector.x,
    pointerY: baseVector.y,
  })

  const draw = () => {
    p5.push()
    arrowDraw()
    p5.rotate(endVector.heading())
    triangleDraw({ color, strokeWeight })
    p5.pop()
  }

  return {
    draw,
  }
}
