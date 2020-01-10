import { useState } from "react";

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    console.log('re-run ', value);

    const reset = () => {
        setValue(initialValue);
    }

    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value);
        }
    };

    return [value, bind, reset];
}
 
export default useInput;