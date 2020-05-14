import React, { useState, useEffect } from 'react';



function UseEffectWithCoords2() {

    const [coords, setCoords] = useState({ x: 0, y: 0 });


    function logMousePosition(e) {
        console.log('Mouse is moving')

        setCoords({ ...coords, x: e.clientX, y: e.clientY });
    }


    useEffect(() => {
        window.addEventListener('mousemove', logMousePosition);
        return () => {
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])


    return (
        <>
            <div>
                coordinates x - {coords.x}
                coordinates y - {coords.y}
            </div>
        </>
    )

}


export default UseEffectWithCoords2;