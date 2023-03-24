// similar to useEffect except runs AFTER render but BEFORE painting to screen
// means React waits until code finishes before updating the UI
// maybe need to calculate page position or update before showing to users
import { React, useRef, useLayoutEffect } from 'react';

function App() {
  const myBtn = useRef(null);

  useLayoutEffect(() => {
    const rect = myBtn.current.getBoundingClientRect();
    console.log(box.height);
  })

  return <><button ref={ref}></button></>
}
