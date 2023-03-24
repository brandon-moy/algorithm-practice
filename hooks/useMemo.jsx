// helps optimize computation cost / improve performance
// use only as needed for expensive calculations **
import { React, useState, useMemo } from 'react';

// eslint-disable-next-line
function App() {
  // eslint-disable-next-line
  const [count, setCount] = useState(60);

  // eslint-disable-next-line
  const expensiveCount = useMemo(() => {
    return count * 2;
  }, [count]);
  // second argument is dependency when computation should be run
  return <></>;
}
