import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        function doSomething() {
            console.log('someProp');
        }
        doSomething();

        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, ['someProp']);

  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default IntervalHookCounter
