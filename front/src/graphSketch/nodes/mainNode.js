import Node from './node'

export const MainNode = ({ p5, xCoordinate, yCoordinate, label }) => {
  const color = '#485696'
  const radius = 15

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

  return {
    draw: baseNode.draw,
    getRadius: baseNode.getRadius,
    setXCoordinate: baseNode.setXCoordinate,
    setYCoordinate: baseNode.setYCoordinate,
    getXCoordinate: baseNode.getXCoordinate,
    getYCoordinate: baseNode.getYCoordinate,
  }
}