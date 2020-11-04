import React from 'react'
import { Search } from '../components/organisms/Search'
import { Graph } from '../components/organisms/Graph'
import { ResultsTables } from '../components/organisms/ResultsTables'
import { HistoryBar } from '../components/molecules/HistoryBar'
import { GraphoraProvider } from '../components/GraphoraContext'

const App = () => (
  <GraphoraProvider>
    <Search />
    <HistoryBar />
    <ResultsTables />
    <Graph />
  </GraphoraProvider>
)

export default App
