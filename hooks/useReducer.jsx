// Similar to set state but in a redux pattern - dispatch actions to reducer
// function which then determines what to do with the next state

// helps to manage state as application grows
import { React, useReducer } from 'react';

// reducer function takes state and action and computers what to do with the
// next state
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      throw new Error();
  }
}

function App() {
  // returns an array of two values
  // value of state to show in UI
  // function used to dispatch an action
  // hook takes initial state as second argument
  const [state, dispatch] = useReducer([reducer, 0]);

  // action is an option that has a type (string) and a data payload
  return (
    <>
      Count: {state}
      <button onClick={() => dispatch({ type: 'decrement' })} />
    </>
  );
}
