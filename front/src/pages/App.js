import React from 'react'

import { Search } from '../components/organisms/Search'
import { Graph } from '../components/organisms/Graph'
import { GraphoraProvider } from '../components/GraphoraContext'

const App = () => (
  <GraphoraProvider>
    <Search />
    <Graph />
  </GraphoraProvider>
)

export default App
