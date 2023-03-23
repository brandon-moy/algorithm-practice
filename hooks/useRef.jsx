// Allows user to create a utable object that can keep a value between renders
// can update value without triggering a rerender
import { React, useRef } from 'react';

// eslint-disable-next-line
function App() {
  const myBtn = useRef(null);

  // created a function to click the button -- can be used when working with APIs
  // to trigger the event
  // eslint-disable-next-line
  const clickIt = () => myBtn.current.click();

  return (
    // add function to ref to connect the ref to the HTML button
    <button ref={myBtn}></button>
  );
}
