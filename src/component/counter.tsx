import { useReducer } from 'react';
import "./counter.css"

function Counter() {

    interface IState{
        count:number
    }

    interface IAction{
        type: 'INCREMENT' |'DECREMENT'
    }
    
    const counterReducer = (state:IState, action:IAction) => {
        switch (action.type) {
          case 'INCREMENT':
            return { count: state.count + 1 };
          case 'DECREMENT':
            if (state.count>0){
            return { count: state.count - 1 };
            }
            return state
          default:
            return state;
        }
      };

  const [newState, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="counter-container">
      <h1>Counter: {newState.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

export default Counter;
