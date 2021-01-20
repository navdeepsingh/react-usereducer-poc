import React from 'react'
import './App.css'

const initialState = {count: 0}

type STATE = {count: number}

type ACTION =
  | {type: 'increment'; count: number}
  | {type: 'decrement'; count: number}

// 1st agrument current state
// 2nd argument dispatch function or new state
function countReducer(state: STATE, action: ACTION) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
    default:
      throw new Error('This should not happen :D')
  }
}

const Counter = () => {
  const [state, dispatch] = React.useReducer(countReducer, initialState)
  return (
    <>
      <h1 style={{textAlign: 'center'}}>{state.count}</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridGap: '0.75rem',
        }}
      >
        <button onClick={() => dispatch({type: 'increment', count: 10})}>
          +
        </button>
        <button onClick={() => dispatch({type: 'decrement', count: 1})}>
          -
        </button>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <Counter />
    </>
  )
}

export default App
