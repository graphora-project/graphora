export const graphSketch = (p) => {
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight)
  }

  p.draw = () => {
    p.background(255)
  }
}
