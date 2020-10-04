import { GraphBuilder } from './graph/graphBuilder'

export const graphSketch = () => {
  let data = []
  let currentWord = ''
  let onClickFunction
  let graph

  const setData = (p5, _data, _currentWord) => {
    data = _data
    currentWord = _currentWord
    graph = GraphBuilder({ p5, data, currentWord, onClickFunction })
  }

  const setOnClickFunction = (_onClickFunction) => {
    onClickFunction = _onClickFunction
  }

  const sketch = (p5) => {
    // eslint-disable-next-line
    p5.setup = () => {
      p5.createCanvas(
        (window.innerWidth / 100) * 90,
        (window.innerHeight / 100) * 90,
      )
    }

    // eslint-disable-next-line
    p5.draw = () => {
      p5.background(255)
      p5.cursor('default')

      if (graph) {
        p5.translate(graph.centerX, graph.centerY)
        graph.draw()
      }
    }

    // eslint-disable-next-line
    p5.mouseClicked = () => {
      if (graph) {
        graph.clickListener()
      }
    }
  }

  return { sketch, setData, setOnClickFunction }
}
