import React, { useState } from "react";
import UseEffectWithCoords2 from '../Components/useEffectWithCoords2';

function MouseContainer() {
    const [display, setDisplay] = useState(true);

    return (
        <div>
            <button
                onClick={() => setDisplay(!display)}>
                Toggle display
                 </button>
            {display && <UseEffectWithCoords2 />}

        </div>
    )

}

export default MouseContainer;
