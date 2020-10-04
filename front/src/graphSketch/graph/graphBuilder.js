import dagre from 'dagre'
import { ClickeableNode, RegularNode } from '../nodes'
import { InArrow, OutArrow, InOutArrow } from '../arrows'

export const GraphBuilder = ({ p5, data }) => {
  fakeBuilder()
}

const fakeBuilder = () => {
  let g = new dagre.graphlib.Graph()

  g.setGraph({})

  g.setDefaultEdgeLabel(() => {
    return {}
  })

  g.setNode('abeja', { width: 50, height: 50 })
  g.setNode('flor', { width: 50, height: 50 })
  g.setNode('miel', { width: 40, height: 40 })
  g.setNode('aguijón', { width: 40, height: 40 })
  g.setNode('insecto', { width: 40, height: 40 })

  g.setEdge('abeja', 'flor')
  g.setEdge('abeja', 'miel')
  g.setEdge('abeja', 'aguijón')
  g.setEdge('abeja', 'insecto')

  dagre.layout(g)
  console.log(g)
}
