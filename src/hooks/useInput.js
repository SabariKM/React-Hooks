import {useState} from 'react'

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const reset = () => {
        setValue(initialValue);
    }

    const bind = {
        value, // This equals 'value: value' as per ES6 standards
        onChange: (e) => {
            setValue(e.target.value);
        }
    }

    return [value, bind, reset];
}

export default useInput
