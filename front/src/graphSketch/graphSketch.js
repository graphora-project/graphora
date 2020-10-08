import { GraphBuilder } from './graph/graphBuilder'

export const graphSketch = () => {
  let data = []
  let currentWord = ''
  let onClickFunction
  const scale = 1
  let graph

  const canvasWidth = (window.innerWidth / 100) * 90
  const canvasHeight = (window.innerHeight / 100) * 90

  const setData = (p5, _data, _currentWord) => {
    // as setState function in React is asynchronus, when a new word is searched
    // react sends the new currentWord but the data is the same as before, creating and error on the graph
    if (data !== _data) {
      data = _data
      currentWord = _currentWord
      graph = GraphBuilder({ p5, data, currentWord, onClickFunction })
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
        const centerX = canvasWidth / 2
        const centerY = canvasHeight / 2

        p5.scale(scale)
        p5.translate(centerX, centerY)

        graph.draw({ scale, centerX, centerY })
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
