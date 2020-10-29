export const graphSketch = ({ initialCanvasWidth, initialCanvasHeight }) => {
  let scale = 1.5
  let graph

  let canvasWidth = initialCanvasWidth
  let canvasHeight = initialCanvasHeight
  let fixXPosition = 0
  let fixYPosition = 0

  const setGraph = (_graph) => {
    fixXPosition = 0
    fixYPosition = 0
    graph = _graph
  }

  const setCanvasDimensions = (width, height) => {
    canvasWidth = width
    canvasHeight = height
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
        const centerX = canvasWidth / 2
        const centerY = canvasHeight / 2

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

  return { sketch, setGraph, setCanvasDimensions }
}
