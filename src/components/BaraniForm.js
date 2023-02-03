import React, {useState, useRef, useEffect} from 'react'

function BaraniForm() {
    const inputRef = useRef();
    const [updated, setUpdated] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        setUpdated(inputRef.current.value);
    }

    useEffect(() => {
        console.log(updated);
    })

  return (
    <div>
        <form>
            <label>Enter your name here</label>
            <input ref={inputRef} type="text"></input>
            <button onClick={handleClick} type={"type"}>Submit</button>
        </form>
        <h1>input value: {updated}</h1>
    </div>
  )
}

export default BaraniForm
