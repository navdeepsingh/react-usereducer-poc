import React from 'react'
import './App.css'

interface iProps {
  step?: number
  initialCount?: number
}

interface iState {
  count: number
}

type Action =
  | {type: 'increment'; count: number}
  | {type: 'decrement'; count: number}

// 1st agrument current state
// 2nd argument dispatch function or new state
function countReducer(state: iState, action: Action): iState {
  switch (action.type) {
    case 'increment':
      return {count: state + 1}
    case 'decrement':
      return {count: state - 1}
    default:
      return state
  }
}

const Counter: React.FC<iProps> = ({step = 1, initialCount = 0}) => {
  const [count, dispatch] = React.useReducer(countReducer, initialCount)
  return (
    <>
      <h1 style={{textAlign: 'center'}}>{count}</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridGap: '0.75rem',
        }}
      >
        <button onClick={() => dispatch({type: 'increment', count})}>+</button>
        <button onClick={() => dispatch(count - step)}>-</button>
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
