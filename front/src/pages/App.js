import React from 'react'

import Search from '../components/Search'
import Graph from '../components/Graph'
import { GraphoraProvider } from '../components/GraphoraContext'

const App = () => (
  <GraphoraProvider>
    <Search />
    <Graph />
  </GraphoraProvider>
)

export default App
