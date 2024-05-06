import React from 'react'

import GrandChild1 from './GrandChild1'
import GrandChild2 from './GrandChild2'

const containerStyle = {
  padding: '20px',
  margin: '20px',
  border: '1px dotted black',
  width: '100%'
}

function Child1({ count, setCount }) {
  return (
    <div style={containerStyle}>
      Child1
      <div style={{ display: 'flex' }}>
        <GrandChild1 count={count} setCount={setCount} />
        <GrandChild2 />
      </div>
    </div>
  )
}

export default Child1