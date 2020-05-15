import React, { useState } from 'react';



function HookWithObjects() {

    const [name, setName] = useState({ firstName: '', lastName: '' });


    // Note: important to spread object before mutating it,, otherwise when you update lastName, firstname will be lose in state and vice versa. Also, useState does not merge objects on its own , so we need to do it on our own

    return (
        <>
            <div>

                <input type="text"
                    value={name.firstName}
                    onChange={(e) => setName({...name, firstName: e.target.value })} />

                <input type="text"
                    value={name.lastName}
                    onChange={(e) => setName({...name, lastName: e.target.value })} />

                <p>{`firstName::  ${name.firstName}`}</p>
                <p>{`lastName::  ${name.lastName}`}</p>
            </div>
        </>
    )

}


export default HookWithObjects;