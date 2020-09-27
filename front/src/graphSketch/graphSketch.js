export const graphSketch = (p) => {
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL)
  }

  p.draw = () => {
    p.background(255)
    p.fill('#0D0628')
    p.noStroke()
    p.rotateX(p.frameCount * 0.01)
    p.rotateY(p.frameCount * 0.01)
    p.box(45, 45, 45)
  }
}
