export const Node = ({ p5, xCoordinate, yCoordinate, label, relations }) => {
  const draw = ({ color, ratio }) => {
    p5.fill(color)
    p5.stroke(0)
    p5.ellipse(xCoordinate, yCoordinate, ratio, ratio)

    p5.fill(0)
    p5.textSize(16)
    p5.text(label, xCoordinate, yCoordinate + ratio + 20)
  }

  return [draw, relations]
}
