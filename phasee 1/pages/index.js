import React, { useState } from 'react';


const InputElement = () => {


    const [inputText, setInputText] = useState("");
    const [historyList, setHistoryList] = useState([]);


    function handleChange(e) {
        setInputText(e.target.value);
        setHistoryList([...historyList, e.target.value])
    }

    return (
        <>
            <input
                onChange={handleChange}
                placeholder="Enter text" />
            {<h2>{inputText}</h2>}
            <hr />
            <br />

            <ul>
                {historyList.map((record) => {
                    return (
                        <div> {record} </div>
                    )
                })}

            </ul>

        </>

    )
}

export default InputElement;