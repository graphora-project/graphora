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
    relations,
  })
  const color = '#FC7A1E'
  const ratio = 40

  const draw = () => {
    baseNodeDraw({ color, ratio })
  }

  return {
    draw,
    relations,
  }
}
