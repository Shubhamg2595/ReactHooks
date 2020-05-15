import React, { useState, useEffect } from 'react';
import { useDocumentTitle } from './Hooks/useDocumentTitle'

export default function DocTitleTwo() {


    const [count, setCount] = useState(0);

    useDocumentTitle(count);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count} </button>
        </div>
    )
}