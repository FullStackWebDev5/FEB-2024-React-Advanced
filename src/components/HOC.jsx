import React from 'react'

const containerStyle = {
  backgroundColor: 'aliceblue',
  border: '2px dotted black',
  margin: '20px',
  fontSize: '1.2rem',
}

function HOC(props) {
  return (
    <div style={containerStyle}>
      {props.children}
    </div>
  )
}

export default HOC


/*
  ## HOC: Higher Order Components
  A component which takes another component as a parameter and returns a customized component

  # HOC example 1
  function HOC({ Component }) {
    return (
      <div style={containerStyle}>
        <Component />
      </div>
    )
  }
*/