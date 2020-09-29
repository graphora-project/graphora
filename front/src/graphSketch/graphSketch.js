import { ClickeableNode, RegularNode, TertiaryNode } from './nodes'

export const graphSketch = (p5) => {
  const node1 = ClickeableNode({
    p5,
    xCoordinate: 100,
    yCoordinate: 100,
    label: 'estimulo',
    onClick: () => alert('searching...'),
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
  }

  p5.mouseClicked = () => {
    node1.mouseClicked()
  }
}
