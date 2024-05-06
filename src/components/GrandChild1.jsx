import React from 'react'

const containerStyle = {
  padding: '20px',
  margin: '20px',
  border: '1px dotted black',
  width: '100%'
}

function GrandChild1({ count, setCount}) {
  return (
    <div style={containerStyle}>
      GrandChild1<br />
      <p style={{ fontSize: '2em'}}>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default GrandChild1