import React from 'react'

import { Search } from '../components/organisms/Search'
import { Graph } from '../components/organisms/Graph'
import { GraphoraProvider } from '../components/GraphoraContext'

import { graphSketch } from '../graphSketch'

const App = () => (
  <GraphoraProvider>
    <Search />
    <Graph sketch={graphSketch} />
  </GraphoraProvider>
)

export default App
