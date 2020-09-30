import LeftTriangle from './leftTriangle'
import Arrow from './arrow'

export const InArrow = ({ p5, initialX, initialY, finalX, finalY }) => {
  const [triangleDraw] = LeftTriangle({
    p5,
    pointerX: initialX,
    pointerY: initialY,
  })
  const [arrowDraw, color] = Arrow({ p5, initialX, initialY, finalX, finalY })

  const draw = () => {
    arrowDraw()
    triangleDraw({ color })
  }

  return {
    draw,
  }
}
