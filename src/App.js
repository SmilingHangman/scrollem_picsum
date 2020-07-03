import React from 'react'
import classes from './App.module.css'
import InfiniteList from './components/InfiniteList'

function App() {
  return (
    <div className={classes.app}>
      <h1>SCROLL'EM PICSUM AD INFINITUM</h1>
      <InfiniteList />
    </div>
  )
}

export default App
