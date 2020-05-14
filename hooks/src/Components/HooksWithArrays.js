import React, { useState } from 'react';



function HooksWithArrays() {

    const [items, setItems] = useState([]);


    function addItems() {
        let itemsArr = [
            {
                id: 0, value: 'asdasd'
            },
            {
                id: 1, value: '123123'
            },
            {
                id: 2, value: 'zxczc'
            },
            {
                id: 4, value: 'zmmimimxczc'
            }

        ]
        setItems(...items,itemsArr)
    }


    return (
        <>
            <div>
                <button onClick={addItems}>show Items</button>
                <ul>
                    {
                        items.map(item => (
                            <li key={item.id}>{item.value}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    )

}

// Done
export default HooksWithArrays;