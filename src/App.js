import { useState } from 'react'
import './App.css';
// import HOC from './components/HOC'
// import Count from './components/Count'
// import Section1 from './components/Section1'
// import Section2 from './components/Section2';
import Child1 from './components/Child1';
import Child2 from './components/Child2';

const containerStyle = {
  padding: '20px',
  margin: '20px',
  border: '1px dotted black',
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App" style={containerStyle}>
      App
      <p style={{ fontSize: '2em'}}>{count}</p>
      <div style={{ display: 'flex' }}>
        <Child1 count={count} setCount={setCount} />
        <Child2 />
      </div>
    </div>
  );
}

export default App;

/*
  # Component Lifecycle Phases
  - Mounting (Birth): Default state, prop values -> renders
  - Updating (Milestones): New props, setState invoked -> renders
  - Unmounting (Death)

  # Component Lifecycle Methods
  - Mounting: 
    - componentDidMount()
      - useEffect() with empty dependency array
      - API requests
  - Updating:
    - componentDidUpdate()
      - useEffect() with states mentioned inside dependency array
      - Logic dependent upon state updates
  - Unmounting:
    - componentWillUnmount()
      - useEffect() - return callback inside useEffect
      - Reset state value

  #  useEffect syntax -
    useEffect(() => {

    }, [])
    - 1st Argument: callback
    - 2nd Argument: dependecy array

  # Share data between components ([Future] - This is why we require REDUX)
    - Disadvantage 
      - "Props drilling": Pass state and stateHandler down to that descendant component which requires it
      - "Lifting the state up": Lift state up to that component which requires it


  ************************************
  # componentWillUnmount -
  const [showCount, setShowCount] = useState(true)
  componentDidMount
  useEffect(() => {
    console.log('App component mounted successfully')
  }, [])

  {showCount && <Count />}
  <button onClick={() => setShowCount(!showCount)}>{showCount ? 'Hide' : 'Show'}</button>

  # HOC example 1
  <HOC Component={Section1} />
  <HOC Component={Section2} />

  # HOC example 2
  <HOC>
    <Section1 />
  </HOC>
  <HOC>
    <Section2 />
  </HOC>
*/
