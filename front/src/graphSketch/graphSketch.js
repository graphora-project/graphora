import { ClickeableNode, RegularNode, TertiaryNode } from './nodes'
import { InArrow, InOutArrow, OutArrow } from './arrows'

export const graphSketch = (p5) => {
  const node1 = ClickeableNode({
    p5,
    xCoordinate: 100,
    yCoordinate: 100,
    label: 'estimulo',
    onClick: (label) => alert(`searchin ${label}`),
  })
  const node2 = RegularNode({
    p5,
    xCoordinate: 200,
    yCoordinate: 100,
    label: 'relacionada',
  })
  const node3 = TertiaryNode({
    p5,
    xCoordinate: 300,
    yCoordinate: 100,
    label: 'tercer nivel',
  })
  const inArrow = InArrow({
    p5,
    initialX: 100,
    initialY: 300,
    finalX: 300,
    finalY: 300,
  })
  const outArrow = OutArrow({
    p5,
    initialX: 100,
    initialY: 350,
    finalX: 300,
    finalY: 350,
  })
  const inOutArrow = InOutArrow({
    p5,
    initialX: 100,
    initialY: 400,
    finalX: 300,
    finalY: 450,
  })

  p5.setup = () => {
    p5.createCanvas(
      (window.innerWidth / 100) * 90,
      (window.innerHeight / 100) * 90,
    )
  }

  p5.draw = () => {
    p5.background(255)
    p5.cursor('default')

    node1.draw()
    node2.draw()
    node3.draw()

    inArrow.draw()
    outArrow.draw()
    inOutArrow.draw()
  }

  p5.mouseClicked = () => {
    node1.mouseClicked()
  }
}
