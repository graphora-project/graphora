import React from 'react'
import { Search } from '../components/organisms/Search'
import { Graph } from '../components/organisms/Graph'
import { Tables } from '../components/organisms/Tables'
import { HistoryBar } from '../components/molecules/HistoryBar'
import { GraphoraProvider } from '../components/GraphoraContext'

const App = () => (
  <GraphoraProvider>
    <Search />
    <HistoryBar />
    <Tables />
    <Graph />
  </GraphoraProvider>
)

export default App
