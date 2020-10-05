import Node from './node'

export const RegularNode = ({
  p5,
  xCoordinate,
  yCoordinate,
  label,
  relations,
}) => {
  const [baseNodeDraw] = Node({
    p5,
    xCoordinate,
    yCoordinate,
    label,
  })
  const color = '#FC7A1E'
  const diameter = 20

  const draw = () => {
    baseNodeDraw({ color, diameter })
  }

  return {
    draw,
    relations,
  }
}
