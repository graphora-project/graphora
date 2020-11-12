import Node from './node'

export const AssociateNode = ({ xCoordinate, yCoordinate, label }) => {
  const color = '#FC7A1E'
  const radius = 15

  const baseNode = Node({
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
    getRadius: baseNode.getRadius,
    setXCoordinate: baseNode.setXCoordinate,
    setYCoordinate: baseNode.setYCoordinate,
    getXCoordinate: baseNode.getXCoordinate,
    getYCoordinate: baseNode.getYCoordinate,
  }
}
