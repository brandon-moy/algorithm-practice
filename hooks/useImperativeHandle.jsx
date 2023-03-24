// used if you make a reusable component library and need to get access to the
// underlying DOM element and forward it to be accessed by the consumers of the
// users of the library
import { React, useRef, useImperativeHandle, forwardRef } from 'react';

function CoolButton(props, ref) {
  // create ref to element
  const myBtn = useRef(null);

  // modifies exposed ref
  // fairly rare use cases
  useImperativeHandle(ref, () => {
    click: () => {
      console.log('clicking button!');
      myBtn.currentclick();
    }
  })

  return (
    <button ref={myBtn}></button>
  )
}

// forwardRef makes the ref available when someone uses the component
CoolButton = forwardRef(CoolButton)
