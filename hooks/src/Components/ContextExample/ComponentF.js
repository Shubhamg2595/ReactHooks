import React from 'react';
import { UserContext } from '../../App'

function ComponentF() {
    return (
        <>
            <div>
                <UserContext.Consumer>
                    {
                        userName => {
                            return (
                                <>
                                {console.log(userName)}
                                    <h6>UserName received via context</h6>
                                    <p> {userName} </p>.
                        </>
                            )
                        }
                    }
                </UserContext.Consumer>
            </div>
        </>
    )
}


export default ComponentF