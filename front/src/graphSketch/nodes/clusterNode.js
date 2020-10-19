import { ClickeableNode } from './clickeableNode'

export const ClusterNode = ({
  p5,
  xCoordinate,
  yCoordinate,
  label,
  onClick,
}) => {
  const color = '#e3cd2a'
  const baseRadius = 30
  const onHoverRadius = 35

  return ClickeableNode({
    p5,
    xCoordinate,
    yCoordinate,
    label,
    onClick,
    color,
    baseRadius,
    onHoverRadius,
  })
}
