import p5 from 'p5'

const P5Singleton = () => {
  let p5Instance

  const createInstance = ({ p5Sketch, containerReference }) => {
    if (!p5Instance) {
      // eslint-disable-next-line
      p5Instance = new p5(p5Sketch, containerReference)
    }
  }

  const getInstance = () => p5Instance

  return {
    createInstance,
    getInstance,
  }
}

const P5 = P5Singleton()

export default P5
