import Node from './node'

export const TertiaryNode = ({ p5, xCoordinate, yCoordinate, label }) => {
  const color = '#FFBE67'
  const radius = 15

  const baseNode = Node({
    p5,
    xCoordinate,
    yCoordinate,
    label,
    color,
  })
  baseNode.setRadius(radius)

  const draw = () => {
    baseNode.draw()
  }

  return {
    draw,
  }
}
