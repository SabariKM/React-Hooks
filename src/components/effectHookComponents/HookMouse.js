import React, {useState, useEffect} from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event');
        setX(e.clientX);
        setY(e.clientY)
    }

    {/* If we want to mimic the componentDidMount then we can pass a
        empty array as a second argument in useEffect Hook. Then React
        will take that hook and act as a componentDidMount */}

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition);

        {/* When you want to execute some component clean up code, you
            included in a function and return that function from the function passed to useEffect */}
            
        return () => {
            console.log('Component unmounting code');
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

  return (
    <div>{`Hooks X - ${x} Y - ${y}`}</div>
  )
}

export default HookMouse;
