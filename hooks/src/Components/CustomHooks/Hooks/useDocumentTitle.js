import  { useEffect } from 'react';


export function useDocumentTitle(count) {


    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
 
}