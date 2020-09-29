import Node from './node'

export const TertiaryNode = ({ p5, xCoordinate, yCoordinate, label }) => {
  const [baseNodeDraw] = Node({
    p5,
    xCoordinate,
    yCoordinate,
    label,
  })
  const color = '#FFBE67'
  const ratio = 30

  const draw = () => {
    baseNodeDraw({ color, ratio })
  }

  return {
    draw,
  }
}
