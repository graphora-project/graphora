const RandomLayout = () => {
  // quadrants with (0.5, 0.5) as its origin
  const quadrants = [
    {
      x: {
        min: 0,
        max: 0.5,
      },
      y: {
        min: 0,
        max: 0.5,
      },
    },
    {
      x: {
        min: 0.5,
        max: 1,
      },
      y: {
        min: 0,
        max: 0.5,
      },
    },
    {
      x: {
        min: 0.5,
        max: 1,
      },
      y: {
        min: 0.5,
        max: 1,
      },
    },
    {
      x: {
        min: 0,
        max: 0.5,
      },
      y: {
        min: 0.5,
        max: 1,
      },
    },
  ]

  const generate = (graphNodes, { scale = 1 } = {}) => {
    const layout = {
      [graphNodes[0].name]: {
        x: 0.5 * scale,
        y: 0.5 * scale,
      },
    }

    // iterates the quadrants in a circular way. Uses random function to generate
    // a random point within the current quadrant
    let quadrantIndex = 0
    for (let i = 1; i < graphNodes.length; i += 1) {
      const quadrant = quadrants[quadrantIndex]
      layout[graphNodes[i].name] = {
        x:
          (Math.random() * (quadrant.x.max - quadrant.x.min) + quadrant.x.min) *
          scale,
        y:
          (Math.random() * (quadrant.y.max - quadrant.y.min) + quadrant.y.min) *
          scale,
      }

      quadrantIndex = (quadrantIndex + 1) % quadrants.length
    }

    return layout
  }

  return {
    generate,
  }
}

export default RandomLayout
