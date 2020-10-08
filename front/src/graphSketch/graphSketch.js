import { GraphBuilder } from './graph/graphBuilder'

export const graphSketch = () => {
  let data = []
  let currentWord = ''
  let onClickFunction
  let scale = 1.5
  let graph

  const canvasWidth = (window.innerWidth / 100) * 90
  const canvasHeight = (window.innerHeight / 100) * 90
  const centerX = canvasWidth / 2
  const centerY = canvasHeight / 2
  let fixXPosition = 0
  let fixYPosition = 0

  const setData = (p5, _data, _currentWord) => {
    // as setState function in React is asynchronus, when a new word is searched
    // react sends the new currentWord but the data is the same as before, creating and error on the graph
    if (data !== _data) {
      data = _data
      currentWord = _currentWord
      graph = GraphBuilder({ p5, data, currentWord, onClickFunction })
      fixXPosition = 0
      fixYPosition = 0
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

      if (graph) {
        p5.cursor('grab')

        const translateX = (centerX + fixXPosition) / scale
        const translateY = (centerY + fixYPosition) / scale

        movedCanvas()

        p5.scale(scale)
        p5.translate(translateX, translateY)

        graph.draw({ scale, centerX: translateX, centerY: translateY })
      }
    }

    const movedCanvas = () => {
      if (p5.mouseIsPressed && mouseIsInCanvas()) {
        fixXPosition += p5.movedX
        fixYPosition += p5.movedY
      }
    }

    // eslint-disable-next-line
    p5.mouseWheel = (event) => {
      if (graph && mouseIsInCanvas()) {
        scale += event.delta / 500

        if (scale < 0.5) {
          scale = 0.5
        }

        if (scale > 5) {
          scale = 5
        }
      }
    }

    // eslint-disable-next-line
    p5.mouseClicked = () => {
      if (graph) {
        graph.clickListener()
      }
    }

    const mouseIsInCanvas = () => {
      if (mouseXInCanvas() && mouseYInCanvas()) {
        return true
      }
      return false
    }

    const mouseXInCanvas = () => {
      if (p5.mouseX >= 0) {
        if (p5.mouseX <= canvasWidth) {
          return true
        }
      }

      return false
    }

    const mouseYInCanvas = () => {
      if (p5.mouseY >= 0) {
        if (p5.mouseY <= canvasHeight) {
          return true
        }
      }

      return false
    }
  }

  return { sketch, setData, setOnClickFunction }
}
