import React from 'react'

const App = () => {

  const toScroll = (elem) => {
    console.log('page scrolling at speed:', elem);
  }
  return (
    <div onWheel={(elem) => {
      toScroll(elem.deltaY);
      
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App