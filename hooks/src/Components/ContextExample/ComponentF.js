import React from 'react';
import { UserContext, ChannelContext } from '../../App'

function ComponentF() {
    return (
        <>
            <div>
                <UserContext.Consumer>
                    {
                        userName => {
                            return (
                                <ChannelContext.Consumer>
                                    {
                                        channelCreator => {
                                            return (
                                                <>
                                                {console.log(userName)}
                                                <h6>UserName received via context</h6>
                                                <p> {userName} </p>.

                                                <h6>ChannelCreator Name via context</h6>
                                                <p> {channelCreator} </p>.
                                                
                                    </>
                                            )
                                        }
                                    }
                                </ChannelContext.Consumer>
                               
                            )
                        }
                    }
                </UserContext.Consumer>
            </div>
        </>
    )
}


export default ComponentF