import { GraphBuilder } from './graph/graphBuilder'
import { CollisionsManager } from './collisionsManager'

export const graphSketch = () => {
  let data = []
  let currentWord = ''
  let onClickFunction
  let graph
  let collisionsManager
  let scale = 1

  const canvasWidth = (window.innerWidth / 100) * 90
  const canvasHeight = (window.innerHeight / 100) * 90

  const setData = (p5, _data, _currentWord) => {
    // as setState function in React is asynchronus, when a new word is searched
    // react sends the new currentWord but the data is the same as before, creating and error on the graph
    if (data !== _data) {
      data = _data
      currentWord = _currentWord
      graph = GraphBuilder({ p5, data, currentWord, onClickFunction })
      collisionsManager = CollisionsManager({ p5 })
    }
  }

  const setOnClickFunction = (_onClickFunction) => {
    onClickFunction = _onClickFunction
  }

  const sketch = (p5) => {
    // eslint-disable-next-line
    p5.setup = () => {
      p5.createCanvas(canvasWidth, canvasHeight)
    }

    // eslint-disable-next-line
    p5.draw = () => {
      p5.background(255)
      p5.cursor('default')

      if (graph) {
        p5.scale(scale)
        p5.translate(canvasWidth / 2, canvasHeight / 2)
        p5.translate(graph.centerX, graph.centerY)
        graph.draw({ scale })
        collisionsManager.checkCollisions(graph.nodes)
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
