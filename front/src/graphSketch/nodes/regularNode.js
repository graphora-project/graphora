import Node from './node'

export const RegularNode = ({ p5, xCoordinate, yCoordinate, label }) => {
  const color = '#FC7A1E'
  const radius = 10

  const baseNode = Node({
    p5,
    xCoordinate,
    yCoordinate,
    label,
    color,
  })
  baseNode.setRadius(radius)
  baseNode.setXCoordinate(xCoordinate)
  baseNode.setYCoordinate(yCoordinate)

  const draw = () => {
    baseNode.draw()
  }

  return {
    draw,
    setXCoordinate: baseNode.setXCoordinate,
    setYCoordinate: baseNode.setYCoordinate,
    xCoordinate: baseNode.xCoordinate,
    yCoordinate: baseNode.yCoordinate,
  }
}
