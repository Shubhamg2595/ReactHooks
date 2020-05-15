import React, { useEffect, useRef } from 'react';


function FocusInput() {


    const inputRef = useRef();
    useEffect(() => {
        // focus the input element
        const element = inputRef.current;
        element.focus();
    }, [])


    return (
        <div>
            <input type="text" ref={inputRef} />

        </div>
    )
}

export default FocusInput