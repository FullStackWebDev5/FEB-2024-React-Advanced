import React, { useState } from 'react'

function Count() {
  const [count, setCount] = useState(0)

  // componentDidMount
  // useEffect(() => {
  //   console.log('Count component mounted successfully')
  // }, [])

  //componentDidUpdate
  // useEffect(() => {
  //   console.log('Count component updated successfully')
  // }, [count])

  //componentWillUnmount
  // useEffect(() => {
  //   return () => {
  //     console.log('Count component unmounted successfully')
  //   }
  // }, [])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default Count