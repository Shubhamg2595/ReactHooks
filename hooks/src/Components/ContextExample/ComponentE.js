import React, { useContext } from 'react';
import { ChannelContext, UserContext } from '../../App'
import ComponentF from './ComponentF';



function ComponentE() {


    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            <p> ComponentE </p>
            userName {user} - CreatedBy {channel}
        </div>
    )
}

export default ComponentE