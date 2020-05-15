import React, { useReducer, useEffect } from "react";

const initialState = {
    loading: false,
    post: {},
    error: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'postLoading':
            return {
                ...state,
                loading: true
            }
        case 'postSuccess':
            return {
                ...state,
                loading: false,
                post: action.data
            }
        case 'postError':
            return {
                ...state,
                loading: false,
                error: action.error
            }


        default:
            return initialState;
    }
}



function DataFetching() {


    const [postState, dispatchPostAction] = useReducer(reducer, initialState)


    useEffect(() => {
        dispatchPostAction({ type: 'postLoading' });
        fetch('https://jsonplaceholder.typicode.com/posts/2')
            .then(response => {
                return response.json()
            })
            .then(post => {
                dispatchPostAction({ type: 'postSuccess', data: post });

            })
            .catch(err => {
                dispatchPostAction({ type: 'postError', error: 'SomeThing went Wrong' })
            })
    }, [])



    return (
        <div>
            {console.log(postState)}
            {postState.loading ? 'loading posts ...' : <h3>{postState.post.title}</h3>}

            {postState.error ? <h4>{postState.error}</h4> : null}

        </div>
    )
}


export default DataFetching;