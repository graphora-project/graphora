export const calculateGraphDimensions = () => {
  const graphWidth = (window.innerWidth / 100) * 90
  const graphHeight = (window.innerHeight / 100) * 90

  return {
    graphWidth,
    graphHeight,
  }
}
