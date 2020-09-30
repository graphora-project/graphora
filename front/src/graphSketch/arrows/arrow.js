import Line from './line'

const Arrow = ({ p5, initialX, initialY, finalX, finalY }) => {
  const [lineDraw] = Line({ p5, initialX, initialY, finalX, finalY })
  const weight = 1
  const color = '#242424'

  const draw = () => {
    lineDraw({ color, weight })
  }

  return [draw, color]
}

export default Arrow
