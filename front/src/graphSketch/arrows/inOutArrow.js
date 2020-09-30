import RightTriangle from './rightTriangle'
import LeftTriangle from './leftTriangle'
import Arrow from './arrow'

export const InOutArrow = ({ p5, initialX, initialY, finalX, finalY }) => {
  const [rightTriangleDraw] = RightTriangle({
    p5,
    pointerX: finalX,
    pointerY: finalY,
  })
  const [leftTriangleDraw] = LeftTriangle({
    p5,
    pointerX: initialX,
    pointerY: initialY,
  })

  const [arrowDraw, color] = Arrow({ p5, initialX, initialY, finalX, finalY })

  const draw = () => {
    arrowDraw()
    rightTriangleDraw({ color })
    leftTriangleDraw({ color })
  }

  return {
    draw,
  }
}
