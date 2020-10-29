import P5 from '../p5/P5'
import Line from './line'

const Arrow = ({ initialNode, finalNode }) => {
  const p5 = P5.getInstance()
  const strokeWeight = 0.5
  const color = '#C7D8F0'

  const line = Line()

  const draw = ({ display = true } = {}) => {
    const initialX = initialNode.getXCoordinate()
    const initialY = initialNode.getYCoordinate()
    const finalX = finalNode.getXCoordinate()
    const finalY = finalNode.getYCoordinate()

    const endVector = p5.createVector(finalX - initialX, finalY - initialY)
    const baseVector = p5.createVector(0, 0)

    p5.translate(initialX, initialY)

    if (display) {
      line.draw({
        color,
        strokeWeight,
        initialX: baseVector.x,
        initialY: baseVector.y,
        finalX: endVector.x,
        finalY: endVector.y,
      })
    }

    return {
      baseVector,
      endVector,
    }
  }

  return { draw, color, strokeWeight }
}

export default Arrow
