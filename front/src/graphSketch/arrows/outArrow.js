import RightTriangle from './rightTriangle'
import Arrow from './arrow'

export const OutArrow = ({ p5, initialX, initialY, finalX, finalY }) => {
  const [triangleDraw] = RightTriangle({
    p5,
    pointerX: finalX,
    pointerY: finalY,
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
