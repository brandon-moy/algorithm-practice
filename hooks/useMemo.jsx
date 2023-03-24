// helps optimize computation cost / improve performance
// use only as needed for expensive calculations **
import { React, useState, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(60);

  const expensiveCount = useMemo(() => {
    return count * 2;
  }, [count]);
  // second argument is dependency when computation should be run
  return <></>;
}
