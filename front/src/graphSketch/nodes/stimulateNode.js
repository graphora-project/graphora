import { ClickeableNode } from './clickeableNode'

export const StimulateNode = ({
  p5,
  xCoordinate,
  yCoordinate,
  label,
  onClick,
}) => {
  const color = '#F24C00'
  const baseRadius = 15
  const onHoverRadius = 20

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
