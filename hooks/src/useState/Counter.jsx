import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='text-center'>
      <button onClick={()=> setCount(count + 1)}>Count : {count}</button>
    </div>
  )
}

export default Counter
