// Used to "memoize" an entire functions
import { React, useState, useCallback } from 'react';

function App() {
  const [count, setCount] = useState(60);

  // by wrapping in useCallback is will stop unnecessary rerenders
  // especially helps with big lists
  const showCount = useCallback(() => {
    alert(`Count ${count}`);
  });

  return <> <SomeChild handler={showCount}></SomeChild> </>
}
