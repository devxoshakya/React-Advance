import React, { useRef } from 'react'

const FocusInput = () => {
    const input = useRef(null);
    const clickToFocus = () => {
        input.current.focus();
    }
  return (
    <div>
      <input type="text" placeholder='this will be focused' ref={input}/>
      <button onClick={()=> clickToFocus()}>focus kar le bhai</button>

    </div>
  )
}

export default FocusInput
