import { ClickeableNode } from './nodes'

export const graphSketch = (p5) => {
  const node1 = ClickeableNode({
    p5,
    xCoordinate: 100,
    yCoordinate: 100,
    label: 'estimulo',
    onClick: () => alert('searching...'),
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
  }

  p5.mouseClicked = () => {
    node1.mouseClicked()
  }
}
