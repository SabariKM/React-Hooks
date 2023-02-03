import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value};
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value};
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value};
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value};
        case 'reset1':
            return {...state, firstCounter: initialState.firstCounter};
        case 'reset2':
            return {...state, secondCounter: initialState.secondCounter};
        default:
            return state;
    }
}

function CounterTwo() {
   const [count, dispatch] =  useReducer(reducer, initialState);
   const [countThree, dispatchThree] = useReducer(reducer, initialState);
  return (
    <div>
        <div style={{margin: '10px'}}>
            <div>
                {`First Count - ${count.firstCounter} `}
                <button onClick={() => dispatch({type: 'increment', value: 1})}>
                    Increment
                </button>
                <button onClick={() => dispatch({type: 'decrement', value: 1})}>
                    Decrement
                </button>
                <button onClick={() => dispatch({type: 'increment', value: 5})}>
                    Increment 5
                </button>
                <button onClick={() => dispatch({type: 'decrement', value: 5})}>
                    Decrement 5
                </button>
                <button onClick={() => dispatch({type: 'reset1'})}>Reset</button>
            </div>
        </div>
        <div style={{margin: '10px'}}>
            <div>
                {`Second Count - ${count.secondCounter} `}
                <button onClick={() => dispatch({type: 'increment2', value: 1})}>
                    Increment Counter 2 by 1
                </button>
                <button onClick={() => dispatch({type: 'decrement2', value: 1})}>
                    Decrement Counter 2 by 1
                </button>
                <button onClick={() => dispatch({type: 'increment2', value: 5})}>
                    Increment Counter 2 by  5
                </button>
                <button onClick={() => dispatch({type: 'decrement2', value: 5})}>
                    Decrement Counter 2 by  5
                </button>
                <button onClick={() => dispatch({type: 'reset2'})}>Reset</button>
            </div>
        </div>
        <div style={{margin: '10px'}}>
            <div>
                {`Third Count - ${countThree.firstCounter} `}
                <button onClick={() => dispatchThree({type: 'increment', value: 1})}>
                    Increment Counter 3 by 1
                </button>
                <button onClick={() => dispatchThree({type: 'decrement', value: 1})}>
                    Decrement Counter 3 by 1
                </button>
                <button onClick={() => dispatchThree({type: 'reset1'})}>Reset</button>
            </div>
        </div>
    </div>
  )
}

export default CounterTwo
